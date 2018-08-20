import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import $ from 'jquery';
import { pageLinkFocus } from '@shopify/theme-a11y';
import { cookiesEnabled } from '@shopify/theme-cart';
import { formatMoney } from '@shopify/theme-currency';
import Cookies from 'js-cookie';
import createSticky from './stickyElement';
import setupVhHelper, { setVhProperty } from './vhHelper';

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

  // recalc the window height due to an issue
  // when the keyboard is open on ios
  // and the user opens the cart
  setVhProperty();
}

function toggleMobileMenu() {
  $body.toggleClass('modalOpen');
  $hamburger.toggleClass('open');
  $mobileMenu.toggleClass('open');
}

// Clipboard logic

function showClipboardMessage(classToAdd, removeDelay = 1000) {
  $('.copy-messages').addClass(classToAdd);
  window.setTimeout(() => {
    $('.copy-messages').removeClass(classToAdd);
  }, removeDelay);
}

function bindClipboardEvents() {
  const clipboard = new ClipboardJS('.copy-button');
  clipboard.on('success', (e) => {
    showClipboardMessage('copy__success');
    e.clearSelection();
  });

  clipboard.on('error', (e) => {
    showClipboardMessage('copy__error', 2000);
  });
}


// Promo modal logic

function showPromoSuccess() {
  submitPromoEmail();
  bindClipboardEvents();
  $('.modal').addClass('showSuccess');
}

function showPromoModal() {
  $body.addClass('modalDesktop');
  $('.modal').addClass('open');
  const promoCode = $('.modal').data('promo');
  Cookies.set(`sdc_seen_promo_${promoCode}`, true, { expires: 365 });
}


function submitPromoEmail() {
  console.log('submit that via ajax dog');
  const userEmail = window.btoa('nick@test.com');
  $.ajax({
    url: 'https://cloud.email.smiledirectclub.com/shopify_entry_log',
    dataType: 'json',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded',
    data: `token=Ku16HQXF7t9HQdj5I7FBO0vrehnvtAwDEsRjOgr3GXzVhEEIMxwCNVy4EcIQU&user=${userEmail}`,
    processData: false,
    success: function success(data, textStatus, jQxhr) {
      console.log('success');
    },
    error: function error(data) {
      console.log(data);
    },
  });
}

function shouldShowPromoModal() {
  const $promoModal = $('#promo-modal');
  if ($promoModal.length) {
    const promoCode = $promoModal.data('promo');
    const hasCookie = Cookies.get(`sdc_seen_promo_${promoCode}`);
    return !hasCookie;
  }

  return false;

}

$(document).ready(() => {
  $hamburger.on('click', () => {
    toggleMobileMenu();
  });

  $cartTriggers.on('click', (event) => {
    event.preventDefault();
    toggleCart();
  });

  $('.modalTrigger').on('click', (e) => {
    showPromoModal();
  });

  $('.modalCloseTrigger').on('click', (e) => {
    hideMobileMenu();
    $body.removeClass('modalDesktop');
    $('.modal').removeClass('open');
    $modalCart.removeClass('isOpen');
  });

  // Promo modal logic
  $('#promoEntry').on('submit', (e) => {
    e.preventDefault();
    showPromoSuccess();
  });

  if (shouldShowPromoModal()) {
    setTimeout(() => {
      showPromoModal();
    }, 1000);
  }

  $('#contact_form').on('submit', (e) => {
    e.preventDefault();
    let action = '/contact?';
    action += `${encodeURIComponent('form_type')}=${encodeURIComponent('contact')}`;
    action += `&${encodeURIComponent('utf8')}=${encodeURIComponent('✓')}`;
    action += `&${encodeURIComponent('contact[email]')}=${encodeURIComponent('jim@jim.com')}`;

    console.log({ action });

    /* Submit the form
    //---------------------------------------*/
    $.ajax({
      type: 'POST',
      async: true,
      url: action,
      error(jqXHR, textStatus, errorThrown) {
        console.log('er', jqXHR, textStatus, errorThrown);
      },
      success(response) {
        console.log('sucess', response);
      },
    });
  });
});


// Product Cart actions

function addToCartFail(error) {
  window.console.log('fail', error);
}

function updateExistingCartItem(id, quantity) {
  $(`#product-${id} [data-product-quantity]`).text(quantity);
  // console.log($(`#product-${id} .cart-item--incrementer button`));
  $(`#product-${id} .cart-item--incrementer button`).each(function () {
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
      .queue(function (next) {
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
    error: (error) => window.console.log({ error }),
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

  $('.cart-items').on('click', '.cart-item--actions a', function (event) {
    event.preventDefault();
    const $cartItem = $(this).closest('.cart-item');
    removeCartItem($cartItem);
  });
});
