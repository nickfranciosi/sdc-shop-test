import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import $ from 'jquery';
import {pageLinkFocus} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';
import {formatMoney} from '@shopify/theme-currency';

import createSticky from './stickyElement';
import setupVhHelper from './vhHelper';

window.slate = window.slate || {};
window.theme = window.theme || {};

$(document).ready(() => {

  createSticky($('header'));
  setupVhHelper();

  if (window.location.hash !== '#') {
    pageLinkFocus($(window.location.hash));
  }

  $('.in-page-link').on('click', (evt) => {
    pageLinkFocus($(evt.currentTarget.hash));
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace(
      'supports-no-cookies',
      'supports-cookies',
    );
  }
});


// Modal Actions

const $mobileMenu = $('#mobile-menu');
const $body = $('body');
const $hamburger = $('.hamburger');
const $modalCart = $('#modalCart');
const $cartTriggers = $('.modalCartTrigger');

function hideMobileMenu() {
  $mobileMenu.removeClass('open');
  $body.removeClass('modalOpen');
  $hamburger.removeClass('open');
}

function toggleCart() {
  // close mobile menu if open
  hideMobileMenu();
  $body.toggleClass('modalDesktop');
  $modalCart.toggleClass('isOpen');
}

function toggleMobileMenu() {
  $body.toggleClass('modalOpen');
  $hamburger.toggleClass('open');
  $mobileMenu.toggleClass('open');
}

$(document).ready(() => {
  $hamburger.on('click', () => {
    toggleMobileMenu();
  });

  $cartTriggers.on('click', (event) => {
    event.preventDefault();
    toggleCart();
  });
});


// Product Cart actions

function addToCartFail(error) {
  window.console.log('fail', error);
}

function updateExistingCartItem(id, quantity) {
  $(`#product-${id} [data-product-quantity]`).text(quantity);
  // console.log($(`#product-${id} .cart-item--incrementer button`));
  $(`#product-${id} .cart-item--incrementer button`).each(function() {
    $(this).data('productCurrentQuantity', quantity);
  });
}

function addNewCartItem(product) {
  const prodTemplate = `
    <div class="cart-item" id="product-${product.id}" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.title}" />
      <div class="cart-item--content">
        <div class="cart-item--info">
          <h4>${product.product_title}${product.variant_title ? ` (${product.variant_title})` : ''}</h4>
          <p>${formatMoney(product.price)}</p>
        </div>
        <div class="cart-item--actions">
          <div class="cart-item--incrementer">
            <button
              class="button button--text button--no-padding"
              data-product-id="${product.id}"
              data-product-current-quantity="${product.quantity}"
              data-product-increment-type="decrement"
            >
              -
            </button>
            <p data-product-quantity>${product.quantity}</p>
            <button
              class="button button--text button--no-padding"
              data-product-id="${product.id}"
              data-product-current-quantity="${product.quantity}"
              data-product-increment-type="increment"
            >
              +
            </button>
          </div>
          <a href="#">Remove</a>
        </div>
      </div>
    </div>
  `;
  $('.cart-items').prepend(prodTemplate);
}

function syncCartItems(product) {
  if ($(`#product-${product.id}`).length) {
    updateExistingCartItem(product.id, product.quantity);
  } else {
    addNewCartItem(product);
  }
}

function toggleEmptyCartMessage(itemCount) {
  const $cartContainer = $('.modal-content-container');
  if (itemCount > 0) {
    $cartContainer.removeClass('--empty');
  } else {
    $cartContainer
      .delay(250)
      .queue(function(next) {
        $(this).addClass('--empty');
        next();
      });
  }
}

function addToCartSuccess(product) {
  updateCartInfo();
  syncCartItems(product);
  toggleCart();
}

function cartFetchSuccess(cart) {
  toggleEmptyCartMessage(cart.item_count);
  $('.cart-subtotal p:last-of-type').text(formatMoney(cart.total_price));
  $('.cart-count-wrapper').text(`(${cart.item_count})`);
}

function updateCartInfo() {
  $.ajax({
    type: 'GET',
    url: '/cart.js',
    dataType: 'json',
    success: cartFetchSuccess,
    error: (error) => window.console.log({error}),
  });
}

$(document).ready(() => {
  $('#product-form').on('submit', (event) => {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      dataType: 'json',
      data: $('#product-form').serialize(),
      success: addToCartSuccess,
      error: addToCartFail,
    });
  });

  $('.cart-items').on('click', '.cart-item--incrementer button', (event) => {
    event.preventDefault();
    const $item = $(event.target);
    const $itemData = $item.data();
    const updatedQuantity = $itemData.productIncrementType === 'increment' ? $itemData.productCurrentQuantity + 1 : $itemData.productCurrentQuantity - 1;

    const data = {
      quantity: updatedQuantity,
      id: $itemData.productId,
    };
    if (updatedQuantity >= 1) {
      updateExistingCartItem($itemData.productId, updatedQuantity);
      $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        dataType: 'json',
        data,
        success: cartFetchSuccess,
        error: addToCartFail,
      });
    } else {
      updateExistingCartItem($itemData.productId, 0);
      const $cartItem = $item.closest('.cart-item');
      removeCartItem($cartItem);
    }
  });

  function removeCartItem($item) {
    const $itemData = $item.data();
    $item.addClass('removing');
    window.setTimeout(() => {
      $item.remove();
    }, 550);
    const data = {
      quantity: 0,
      id: $itemData.productId,
    };

    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      dataType: 'json',
      data,
      success: cartFetchSuccess,
      error: addToCartFail,
    });
  }

  $('.cart-items').on('click', '.cart-item--actions a', function(event) {
    event.preventDefault();
    const $cartItem = $(this).closest('.cart-item');
    removeCartItem($cartItem);
  });
});
