import '../../styles/theme.scss';

import $ from 'jquery';
import {pageLinkFocus} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';
import {formatMoney} from '@shopify/theme-currency';
import Cookies from 'js-cookie';
import createSticky from './stickyElement';
import setupVhHelper, {setVhProperty} from './vhHelper';

window.slate = window.slate || {};
window.theme = window.theme || {};

$(document).ready(() => {

  createSticky($('header'), $('[data-section-type="header"]'));
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

  // add target blank to external links
  openExternalLinksInNewTab();
});

function openExternalLinksInNewTab() {
  $('a[href^="http"]').not(`a[href^="${$(window.location).attr('hostname')}"]`).attr('target', '_blank');
}


// Modal Actions

const $mobileMenu = $('#mobile-menu');
const $body = $('body');
const $hamburger = $('.hamburger');
const $modalCart = $('#modalCart');
const $cartTriggers = $('.modalCartTrigger');

function hideMobileMenu() {
  $mobileMenu.removeClass('open');
  $body.removeClass('modalOpen');
  $body.removeClass('modalDesktop-scroll');
  $hamburger.removeClass('open');
}

function toggleCart() {
  // close mobile menu if open
  hideMobileMenu();
  if (window.Shopify && Shopify.StorefrontExpressButtons) {
    Shopify.StorefrontExpressButtons.initialize();
  }
  $body.toggleClass('modalDesktop');
  $body.removeClass('modalDesktop-scroll');
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

let maxWindowHeight = 0;
function setMenuHeight() {
  const headerHeight = $('[data-section-type="header"]').height();
  const windowHeight = (window.outerHeight != 0) ? window.outerHeight : window.innerHeight;
  if (windowHeight > maxWindowHeight) {
    maxWindowHeight = windowHeight;
  }
  $('.mobile-menu').css('height', maxWindowHeight - headerHeight);
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
const SDC_DISCOUNT_COOKIE = 'discount_code';
const SDC_EMAIL_SOURCE = 'sdc_from_crm';
const SDC_DEFAULT_PROMO_CODE = 'requiredCode';
const HONEY_POT_KEY = 'contact_me_by_fax';

function prefillDiscountCode(discount) {
  $('#cartForm').attr('action', `/cart?discount=${discount}`);
  $('.cart-summary .promo-code .code').text(discount);
  $('.cart-summary .promo-code').addClass('valid');
}

function rememberDiscountCodeForSession(discount) {
  Cookies.set(SDC_DISCOUNT_COOKIE, discount, {expires: 1});
}

function addSavedDiscountCode() {
  const discountCode = Cookies.get(SDC_DISCOUNT_COOKIE);
  if (discountCode) {
    // if we are receiving a discount code set from the url
    // lets reset it here with so we can expire it
    // in one day
    rememberDiscountCodeForSession(discountCode);
    prefillDiscountCode(discountCode);
  } else {
    const queryString = parse_query_string(window.location.search.substring(1));
    if (typeof queryString.discount !== 'undefined') {
      // XSS prevention
      const urlDiscountCode = encodeURIComponent(queryString.discount);
      rememberDiscountCodeForSession(urlDiscountCode);
      prefillDiscountCode(urlDiscountCode);
    }
  }
}

function removeDiscountCookie() {
  Cookies.remove(SDC_DISCOUNT_COOKIE);
  // Remove from forms
  addSavedDiscountCode();
  $('.cart-summary .promo-code').removeClass('valid');
  $('.coupon-code-input').val('');
}

function showPromoSuccess() {
  const discountCode = $('#promo-modal').data('promo');
  if (discountCode !== SDC_DEFAULT_PROMO_CODE) {
    rememberDiscountCodeForSession(discountCode);
    prefillDiscountCode(discountCode);
  }
  bindClipboardEvents();
  $('.modal').addClass('showSuccess');
}

function showPromoError() {
  $('.modal').addClass('showError');
}

function showPromoModal() {
  $body.addClass('modalDesktop-scroll');
  $('.modal').addClass('open');
  const promoCode = $('.modal').data('promo');
  Cookies.set(`sdc_seen_promo_${promoCode}`, true, {expires: 365});
}

function promoLoading(isLoading = true) {
  if (isLoading) {
    $('.modal').addClass('loading');
  } else {
    $('.modal').removeClass('loading');
  }
}

function validateHoneyPot() {
  return $(`input[name="${HONEY_POT_KEY}"]`).val().length <= 0;
}

function submitPromoEmail(data) {
  promoLoading();
  $.ajax({
    type: 'POST',
    url: '/contact',
    async: true,
    data,
    beforeSend() {
      if (!validateHoneyPot()) {
        showPromoError();
        return false;
      }
    },
    error() {
      promoLoading(false);
      showPromoError();
    },
    success() {
      promoLoading(false);
      showPromoSuccess();
    },
  });
}

function isUserFromDirectEmailList() {
  const urlParams = new URLSearchParams(window.location.search);
  const fromEmail = Cookies.get(SDC_EMAIL_SOURCE) || (urlParams.has('source') && urlParams.get('source') === 'email');

  return fromEmail;
}

function shouldShowPromoModal() {
  const $promoModal = $('#promo-modal');
  if ($promoModal.length) {
    const promoCode = $promoModal.data('promo');
    const hasCookie = Cookies.get(`sdc_seen_promo_${promoCode}`);
    const fromEmail = isUserFromDirectEmailList();
    if (fromEmail) {
      Cookies.set(SDC_EMAIL_SOURCE, true);
    }

    return !hasCookie && !fromEmail;
  }

  return false;

}

/**
 * Parse a query string and return an object with the keys and values
 * @param  {string} query Query string like `a=1&b=3&c=m2`
 * @return {Object}       Object with keys and values from supplied query string. Eg `{'a': '1', 'b': '3', ...}`
 */
function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      // If third or later entry with this name
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}


$(document).ready(() => {
  $hamburger.on('click', () => {
    toggleMobileMenu();
  });
  $(window).resize(setMenuHeight);
  $(window).on('scroll-sticky-change', setMenuHeight);
  setMenuHeight();

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
    const $form = $('#promoEntry');
    const data = $form.serialize();
    submitPromoEmail(data);
    // showPromoSuccess();
  });

  if (shouldShowPromoModal()) {
    setTimeout(() => {
      showPromoModal();
    }, 6000);
  }

  addSavedDiscountCode();
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
          <h4>${product.product_title}</h4>
          ${product.variant_title ? `<p class="cart-item--sub-title">${product.variant_title}</p>` : ''}
          <p>${formatMoney(product.price).replace(',', '')}</p>
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

  const MAX_CART_COUNT = 99;

  $('.cart-items').on('click', '.cart-item--incrementer button', (event) => {
    event.preventDefault();
    const $item = $(event.target);
    const $itemData = $item.data();
    let updatedQuantity = $itemData.productIncrementType === 'increment' ? $itemData.productCurrentQuantity + 1 : $itemData.productCurrentQuantity - 1;

    if (updatedQuantity > MAX_CART_COUNT) {
      updatedQuantity = MAX_CART_COUNT;
    }

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

  const couponValidationUrl = 'https://shopify-validator.smiledirect.services/';

  function validateCouponCode() {
    const $input = $('input.coupon-code-input');
    const $button = $('button.coupon-code-button');
    const $cart = $('.cart-summary .promo-code');
    const couponCode = $input.val();
    $cart.removeClass('invalid');
    $button.text('Applying...');
    $.get({
      url: couponValidationUrl + couponCode,
      dataType: 'text',
    })
      .done((resp) => {
        if (resp === '1') {
          rememberDiscountCodeForSession(couponCode);
          prefillDiscountCode(couponCode);
          $cart.removeClass('invalid');
          $cart.addClass('valid');
          $button.text('Apply');
        } else if (resp === '0') {
          $cart.removeClass('valid');
          $cart.addClass('invalid');
          $button.text('Apply');
        }
      }).fail(() => {
        $cart.removeClass('valid');
        $cart.addClass('invalid');
        $button.text('Apply');
      });
  }

  // Removing automatic code validation - confusing UX

  // ("input.coupon-code-input").on('input', _.debounce(validateCouponCode, 400));

  $('button.coupon-code-button').click((evt) => {
    evt.preventDefault();
    validateCouponCode();
  });

  $('.promo-code .remove-promo-code').click((evt) => {
    evt.preventDefault();
    removeDiscountCookie();
  });
});

/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="debounce" --production --stdout`
 */
;(function(){function t(){}function e(t){return null==t?t===l?m:p:I&&I in Object(t)?n(t):o(t)}function n(t){var e=$.call(t,I),n=t[I];try{t[I]=l;var o=true}catch(t){}var r=_.call(t);return o&&(e?t[I]=n:delete t[I]),r}function o(t){return _.call(t)}function r(t,e,n){function o(e){var n=d,o=j;return d=j=l,h=e,g=t.apply(o,n)}function r(t){return h=t,O=setTimeout(a,e),T?o(t):g}function u(t){var n=t-x,o=t-h,r=e-n;return S?W(r,v-o):r}function f(t){var n=t-x,o=t-h;return x===l||n>=e||n<0||S&&o>=v}function a(){
var t=k();return f(t)?s(t):(O=setTimeout(a,u(t)),l)}function s(t){return O=l,w&&d?o(t):(d=j=l,g)}function p(){O!==l&&clearTimeout(O),h=0,d=x=j=O=l}function y(){return O===l?g:s(k())}function m(){var t=k(),n=f(t);if(d=arguments,j=this,x=t,n){if(O===l)return r(x);if(S)return O=setTimeout(a,e),o(x)}return O===l&&(O=setTimeout(a,e)),g}var d,j,v,g,O,x,h=0,T=false,S=false,w=true;if(typeof t!="function")throw new TypeError(b);return e=c(e)||0,i(n)&&(T=!!n.leading,S="maxWait"in n,v=S?M(c(n.maxWait)||0,e):v,w="trailing"in n?!!n.trailing:w),
m.cancel=p,m.flush=y,m}function i(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function u(t){return null!=t&&typeof t=="object"}function f(t){return typeof t=="symbol"||u(t)&&e(t)==y}function c(t){if(typeof t=="number")return t;if(f(t))return s;if(i(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=i(e)?e+"":e}if(typeof t!="string")return 0===t?t:+t;t=t.replace(d,"");var n=v.test(t);return n||g.test(t)?O(t.slice(2),n?2:8):j.test(t)?s:+t}var l,a="4.17.5",b="Expected a function",s=NaN,p="[object Null]",y="[object Symbol]",m="[object Undefined]",d=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,O=parseInt,x=typeof global=="object"&&global&&global.Object===Object&&global,h=typeof self=="object"&&self&&self.Object===Object&&self,T=x||h||Function("return this")(),S=typeof exports=="object"&&exports&&!exports.nodeType&&exports,w=S&&typeof module=="object"&&module&&!module.nodeType&&module,N=Object.prototype,$=N.hasOwnProperty,_=N.toString,E=T.Symbol,I=E?E.toStringTag:l,M=Math.max,W=Math.min,k=function(){
return T.Date.now()};t.debounce=r,t.isObject=i,t.isObjectLike=u,t.isSymbol=f,t.now=k,t.toNumber=c,t.VERSION=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd?(T._=t, define(function(){return t})):w?((w.exports=t)._=t,S._=t):T._=t}).call(this);
