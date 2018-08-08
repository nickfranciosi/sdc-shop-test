import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import $ from 'jquery';
import slick from 'slick-carousel';
import {pageLinkFocus} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';
import {formatMoney} from '@shopify/theme-currency';
import {wrapTable, wrapIframe} from '@shopify/theme-rte';

console.log({slick});
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
    console.log('item exists, update values');
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
    } else {
      updateExistingCartItem($itemData.productId, 0);
      const $cartItem = $item.closest('.cart-item');
      removeCartItem($cartItem);
    }
  });

  function removeCartItem($item) {
    const $itemData = $item.data();
    $item.addClass('removing');
    setTimeout(() => {
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
      success: updateCartSuccess,
      error: addToCartFail,
    });
  }

  $('.cart-items').on('click', '.cart-item--actions a', function(e) {
    e.preventDefault();
    const $cartItem = $(this).closest('.cart-item');
    removeCartItem($cartItem);
  });
});

// Slick settings
$(document).ready(() => {
  $('#slickCar').slick({
    infinite: true,
    speed: 300,
    // fade: true,
    arrows: true,
    cssEase: 'ease-in-out',
    draggable: true,
    asNavFor: '#slickThumbs',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          draggable: true,
          fade: false,
        },
      },
    ],
  });

  $('#slickThumbs').slick({
    asNavFor: '#slickCar',
    slidesToShow: 2,
    focusOnSelect: true,
  });
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
const $modalWrapper = document.querySelector('#modalCart');
$modalWrapper.style.setProperty('--vh', `${vh}px`);


(function() {
  createSticky($('header'));
  window.addEventListener('resize', resizeThrottler, false);

  let resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        actualResizeHandler();

        // The actualResizeHandler will execute at a rate of 15fps
      }, 66);
    }
  }

  function actualResizeHandler() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    const $modalWrapper = document.querySelector('#modalCart');
    $modalWrapper.style.setProperty('--vh', `${vh}px`);
  }

})();

function createSticky(sticky) {

  if (typeof sticky !== 'undefined') {

    let pos = sticky.offset().top,
      win = $(window);

    win.on('scroll', () => {
      win.scrollTop() >= pos ? sticky.addClass('fixed') : sticky.removeClass('fixed');
    });
  }
}
