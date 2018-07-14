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
import {wrapTable, wrapIframe} from '@shopify/theme-rte';

window.slate = window.slate || {};
window.theme = window.theme || {};

$(document).ready(() => {
  // Common a11y fixes
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


$(document).ready(() => {
  $('.modalCartTrigger').on('click', (event) => {
    event.preventDefault();
    const $cartModal = $('#modalCart');
    const $body = $('body');

    $body.toggleClass('modalOpen');
    $cartModal.toggleClass('isOpen');
  });

  $('.cart-item--incrementer button').on('click', (e) => {
    e.preventDefault();
    const $item = $(e.target);
    const $itemData = $item.data();
    $.post('/cart/add.js', {
      quantity: 3,
      id: $itemData.productId,
    });
  });

  console.log(Shopify);
  Shopify.onItemAdded = function(cart) {
    $.getJSON('/cart.js', (cart) => {
      console.log('car cart carrtt', cart.item_count);
      $('#cartCount').html(cart.item_count);
    });
  };
});

