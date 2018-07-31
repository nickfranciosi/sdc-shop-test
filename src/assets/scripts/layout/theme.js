import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import $ from 'jquery';
import {pageLinkFocus} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';
import {formatMoney} from '@shopify/theme-currency';
import {wrapTable, wrapIframe} from '@shopify/theme-rte';

window.slate = window.slate || {};
window.theme = window.theme || {};

$(document).ready(() => {

  if (window.location.hash !== '#') {
    pageLinkFocus($(window.location.hash));
  }

  $('.in-page-link').on('click', (evt) => {
    pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  const tableSelectors = '.rte table';

  wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  const iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper',
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

function hideMobileMenu() {
  $('#mobile-menu').removeClass('open');
  $('body').removeClass('modalOpen');
  $('.hamburger').removeClass('open');
}

function toggleCart() {
  // close mobile menu if open
  hideMobileMenu();
  $('body').toggleClass('modalDesktop');
  $('#modalCart').toggleClass('isOpen');
}

function toggleMobileMenu() {
  $('body').toggleClass('modalOpen');
  $('.hamburger').toggleClass('open');
  $('#mobile-menu').toggleClass('open');
}

$(document).ready(() => {
  $('.hamburger').on('click', (e) => {
    toggleMobileMenu();
  });
});

$(document).ready(() => {

  $('.modalCartTrigger').on('click', (event) => {
    event.preventDefault();
    toggleCart();
  });

});

// Product Cart actions

function addToCartFail(error) {
  console.log('fail', error);
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
    <div class="cart-item" id="product-${product.id}">
      <img src="${product.image}" alt="${product.title}" />
      <div class="cart-item--content">
        <div class="cart-item--info">
          <h4>${product.product_title}</h4>
          <p>${formatMoney(product.price)}</p>
        </div>
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
      </div>
    </div>
  `;
  $('.cart-items').prepend(prodTemplate);
}

function syncCartItems(product) {
  if ($(`#product-${product.id}`).length) {
    console.log('item exists, update values');
    updateExistingCartItem(product.id, product.quantity);
  } else {
    addNewCartItem(product);
  }
}

function addToCartSuccess(product) {
  console.log('success', product);
  updateCartInfo();
  syncCartItems(product);
  toggleCart();
}

function updateCartSuccess(cart) {
  console.log('cart success', cart);
  updateCartInfo();
}

function cartFetchSuccess(cart) {
  console.log({cart});
  $('.cart-subtotal p:last-of-type').text(formatMoney(cart.total_price));
  $('.cart-count-wrapper').text(`(${cart.item_count})`);
}

function updateCartInfo() {
  $.ajax({
    type: 'GET',
    url: '/cart.js',
    dataType: 'json',
    success: cartFetchSuccess,
    error: (error) => console.log({error}),
  });
}

$(document).ready(() => {
  $('#product-form').on('submit', (e) => {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      dataType: 'json',
      data: $('#product-form').serialize(),
      success: addToCartSuccess,
      error: addToCartFail,
    });
  });

  $('.cart-items').on('click', '.cart-item--incrementer button', (e) => {
    e.preventDefault();
    const $item = $(e.target);
    const $itemData = $item.data();
    console.log($itemData);
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
        success: updateCartSuccess,
        error: addToCartFail,
      });
    }
  });
});

