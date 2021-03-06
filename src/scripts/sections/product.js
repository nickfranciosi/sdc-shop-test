/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace product
 */

import $ from 'jquery';
// import slick from 'slick-carousel';
import Variants from '@shopify/theme-variants';
import {formatMoney} from '@shopify/theme-currency';
import sections from '@shopify/theme-sections';

const selectors = {
  addToCart: '[data-add-to-cart]',
  addToCartText: '[data-add-to-cart-text]',
  comparePrice: '[data-compare-price]',
  comparePriceText: '[data-compare-text]',
  originalSelectorId: '[data-product-select]',
  priceWrapper: '[data-price-wrapper]',
  productImageWrapper: '[data-product-image-wrapper]',
  productFeaturedImage: '[data-product-featured-image]',
  productJson: '[data-product-json]',
  productPrice: '[data-product-price]',
  productThumbs: '[data-product-single-thumbnail]',
  singleOptionSelector: '[data-single-option-selector]',
};

const cssClasses = {
  activeThumbnail: 'active-thumbnail',
  hide: 'hide',
};

/**
 * Product section constructor. Runs on page load as well as Theme Editor
 * `section:load` events.
 * @param {string} container - selector for the section container DOM element
 */

sections.register('product', {
  onLoad() {
    // Stop parsing if we don't have the product json script tag when loading
    // section in the Theme Editor
    if (!$(selectors.productJson, this.$container).html()) {
      return;
    }

    this.productSingleObject = JSON.parse(
      $(selectors.productJson, this.$container).html(),
    );

    const options = {
      $container: this.$container,
      enableHistoryState: this.$container.data('enable-history-state') || false,
      singleOptionSelector: selectors.singleOptionSelector,
      originalSelectorId: selectors.originalSelectorId,
      product: this.productSingleObject,
    };

    this.settings = {};
    this.variants = new Variants(options);
    this.$featuredImage = $(selectors.productFeaturedImage, this.$container);

    this.$container.on(
      `variantChange${this.namespace}`,
      this.updateAddToCartState.bind(this),
    );

    this.$container.on(
      `variantChange${this.namespace}`,
      this.swapIncrementalPayOption.bind(this),
    );

    this.$container.on(
      `variantChange${this.namespace}`,
      this.swapVariantImageGallery.bind(this),
    );

    this.$container.on(
      `variantPriceChange${this.namespace}`,
      this.updateProductPrices.bind(this),
    );

    if (this.$featuredImage.length > 0) {
      this.$container.on(
        `variantImageChange${this.namespace}`,
        this.updateImages.bind(this),
      );
    }
  },

  setActiveThumbnail(imageId) {
    let newImageId = imageId;

    // If "imageId" is not defined in the function parameter, find it by the current product image
    if (typeof newImageId === 'undefined') {
      newImageId = $(
        `${selectors.productImageWrapper}:not('.${cssClasses.hide}')`,
      ).data('image-id');
    }

    const $thumbnail = $(
      `${selectors.productThumbs}[data-thumbnail-id='${newImageId}']`,
    );

    $(selectors.productThumbs)
      .removeClass(cssClasses.activeThumbnail)
      .removeAttr('aria-current');

    $thumbnail.addClass(cssClasses.activeThumbnail);
    $thumbnail.attr('aria-current', true);
  },

  switchImage(imageId) {
    const $newImage = $(
      `${selectors.productImageWrapper}[data-image-id='${imageId}']`,
      this.$container,
    );
    const $otherImages = $(
      `${selectors.productImageWrapper}:not([data-image-id='${imageId}'])`,
      this.$container,
    );
    $newImage.removeClass(cssClasses.hide);
    $otherImages.addClass(cssClasses.hide);
  },

  /**
   * Updates the DOM state of the add to cart button
   *
   * @param {boolean} enabled - Decides whether cart is enabled or disabled
   * @param {string} text - Updates the text notification content of the cart
   */
  updateAddToCartState(evt) {
    const variant = evt.variant;

    if (variant) {
      $(selectors.priceWrapper, this.$container).removeClass(cssClasses.hide);
    } else {
      $(selectors.addToCart, this.$container).prop('disabled', true);
      $(selectors.addToCartText, this.$container).html(
        theme.strings.unavailable,
      );
      $(selectors.priceWrapper, this.$container).addClass(cssClasses.hide);
      return;
    }

    if (variant.available) {
      $(selectors.addToCart, this.$container).prop('disabled', false);
      $(selectors.addToCartText, this.$container).html(theme.strings.addToCart);
    } else {
      $(selectors.addToCart, this.$container).prop('disabled', true);
      $(selectors.addToCartText, this.$container).html(theme.strings.soldOut);
    }
  },

  swapIncrementalPayOption(evt) {
    const variant = evt.variant;
    const $allPaymentOptionButtons = $('.installment-button__option');

    if ($allPaymentOptionButtons.length > 0) {
      $allPaymentOptionButtons.each(function() {
        $(this).removeClass('--selected');
      });

      $(`[data-variant-id="${variant.id}"]`).addClass('--selected');
    }
  },

  swapVariantImageGallery(evt) {
    const productId = $('.product-single__photos').data('product-id');
    const variant = evt.variant;
    swapVariantGalleries(productId, variant);
  },

  updateImages(evt) {
    const variant = evt.variant;
    const imageId = variant.featured_image.id;
    this.switchImage(imageId);
    this.setActiveThumbnail(imageId);
  },

  /**
   * Updates the DOM with specified prices
   *
   * @param {string} productPrice - The current price of the product
   * @param {string} comparePrice - The original price of the product
   */
  updateProductPrices(evt) {
    const variant = evt.variant;
    const $comparePrice = $(selectors.comparePrice, this.$container);
    const $compareEls = $comparePrice.add(
      selectors.comparePriceText,
      this.$container,
    );

    $(selectors.productPrice, this.$container).html(
      formatMoney(variant.price, theme.moneyFormat),
    );

    if (variant.compare_at_price > variant.price) {
      $comparePrice.html(
        formatMoney(variant.compare_at_price, theme.moneyFormat),
      );
      $compareEls.removeClass(cssClasses.hide);
    } else {
      $comparePrice.html('');
      $compareEls.addClass(cssClasses.hide);
    }
  },

  /**
   * Event callback for Theme Editor `section:unload` event
   */
  onUnload() {
    this.$container.off(this.namespace);
  },
});

function swapVariantGalleries(prodId, variant) {
  // Repurposing this function for the new variant image switching.
  swapVariantImages(variant.title);

  // Leaving existing code for backwards compat if its needed - who knows.
  if (window.VIG && window.VIG.switchImages) {
    window.VIG.switchImages(prodId, variant.id, '.product-single__photos');
  }
}

function swapVariantImages(variantId) {
  var $mainImage = $(`.photo-main-image[data-variant!='${variantId}']`);
  if ($mainImage.hasClass('sdc-using-variant-images')){
    $mainImage.removeClass("sdc-active-variant").fadeOut(150, function(){
      var $mainPhotos = $(`.photo-main-image[data-variant='${variantId}']`);
      $mainPhotos.find('img, .vimeo-video').addClass('hide');
      $mainPhotos.children().first().removeClass('hide');
      $mainPhotos.fadeIn(150, function(){
        $mainPhotos.addClass("sdc-active-variant");
      });
    });
    $(`.photo-thumbnails[data-variant!='${variantId}']`).removeClass("sdc-active-variant").fadeOut(150, function(){
      var $thumbPhotos = $(`.photo-thumbnails[data-variant='${variantId}']`);
      $thumbPhotos.fadeIn(150, function(){
        $thumbPhotos.addClass("sdc-active-variant");
      }).css('display', 'flex');
    });
  }
}

$(document).ready(() => {
  const $hiddenSelect = $('.hidden-selector select');
  const $variantButtons = $('.product-info-variant-options a');
  const $variantDescriptionSlides = $('.product-info--description-variant-slide');

  $variantButtons.on('click', function(event) {
    event.preventDefault();
    const $this = $(this);
    const variantId = $this.data('value');
    $variantButtons.removeClass('selected');
    $this.addClass('selected');

    swapVariantDescriptions(variantId);
    swapVariantImages(variantId);
    $hiddenSelect.val(variantId);
    $hiddenSelect.change();
  });

  function swapVariantDescriptions(variantId) {
    $variantDescriptionSlides.removeClass('active');
    $(`.product-info--description-variant-slide[data-value=${variantId}]`).addClass('active');
  }



  const productId = $('.product-single__photos').data('product-id');
  const currentVariantId = $('.product-single__photos').data('current-variant-id');

  // swap main image when thumbnails are selected
  var $mainImages = $(".photo-main-image");
  $('.photo-thumbnails')
    .on('click', 'li', function() {
      const $this = $(this).children('img');
      const dataImageId = $this.data('image-id');
      $mainImages.children(':not(.hide)').addClass('hide');
      $mainImages.find(`[data-image-id='${dataImageId}'], [data-video-id='${dataImageId}']`).removeClass('hide');
    });
});

$(document).ready(() => {

  if ($('[data-product-handle="new-gift-of-a-smile"], [data-product-handle="gift-of-a-smile"]').length){
    $('[data-option-name="Delivery Method"]').change(function(evt){
      if ($(this).val() == "Digital"){
        $(".product-info-gallery .photo-thumbnails li:first-child").addClass('hide');
        $(".product-info-gallery .photo-main-image img:first-child").addClass('hide');
      } else {
        $(".product-info-gallery .photo-thumbnails li:first-child").removeClass('hide');
        $(".product-info-gallery .photo-main-image img:first-child").removeClass('hide');
      }
    }).change();
  }

  // Thumbnail image hover
  $(".product-single__thumbnail-image").on('mouseover', function(evt){
    var $this = $(evt.target);
    var $mainImg = null;
    var dataImageId = $this.attr('data-image-id');
    if (dataImageId.indexOf('video') !== -1){
      $mainImg = $(`[data-video-id='${dataImageId}']`);
    } else {
      $mainImg = $(`${selectors.productImageWrapper}[data-image-id='${dataImageId}']`);
    }
    $(`${selectors.productImageWrapper}:not('.${cssClasses.hide}')`).addClass(cssClasses.hide);
    $(`.vimeo-video:not('.${cssClasses.hide}')`).addClass(cssClasses.hide);
    $mainImg.removeClass(cssClasses.hide);
  });
});
