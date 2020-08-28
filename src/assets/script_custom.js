jQuery(document).ready(($) => {
  // Highlighting nav items (collection names) based on previus page url
  // -- for product pages that are in multiple collections
  const { referrer } = document
  const items = $('nav li.active-nav-item').toArray()
  const candidates = items.filter( item => referrer.indexOf(item.dataset.url) > -1 )
  const target = referrer && candidates.length ? candidates[0] : items[0]

  $(target).addClass('highlighted-item')

  // Show breadcrumb collection based on previus page url  -- for product pages that are in multiple collections
  const crumbs = $('.bread-crumb-collection').toArray()
  const crumbCandidates = crumbs.filter( item => ( referrer.indexOf('collections') > -1 && referrer.indexOf(item.href) > -1 ))
  const crumb = referrer && crumbCandidates.length ? crumbCandidates[0] : crumbs[0]

  crumb.style.display = 'inline-block'
})


// wait till Bold plugin loads js
window.onload = function() {
  var singlePurchaseContainer = document.querySelector('.bold-ro__one-time-div.bold-ro__radio-div');
  var subscriptionContainer = document.querySelector('.bold-ro__recurring-div.bold-ro__radio-div');

  // be sure subscription is turned on for product
  if((typeof(singlePurchaseContainer) != 'undefined' && singlePurchaseContainer != null) && (typeof(subscriptionContainer) != 'undefined' && subscriptionContainer != null)){
    // show subscription feature once everything is completely loaded
    document.querySelector('.bold-ro__product').style.display = 'block';

    // re-order form items with quanity above subsciption selection - only when subsciption selection is present
    var productForm = document.getElementById('product-form');
    if((typeof(productForm) != 'undefined' && productForm != null)){
      productForm.classList.add('reordered');
    }

    // remove .00 from currency display
    var currencyRawItems = document.querySelectorAll('.bold-custom-price .bold-ro__one-time-price, .bold-custom-price .bold-ro__initial-discount-price');
    for (i = 0; i < currencyRawItems.length; i++) {
      currencyRawItems[i].innerText = currencyRawItems[i].innerText.replace('.00', '');
    }

    //toggle visibility of cart buttons when purchase option is selected
    var ratioInputs = document.querySelectorAll('input[name="bold-ro__selector_radio_button"]');
    for (i = 0; i < ratioInputs.length; i++) {
      ratioInputs[i].addEventListener('click', function(){
        for (r = 0; r < ratioInputs.length; r++) {
          if (ratioInputs[r].checked == true){
            ratioInputs[r].parentElement.parentElement.querySelector('.bold-custom-cart-button-container').classList.add("displayed-div");
          } else {
            ratioInputs[r].parentElement.parentElement.querySelector('.bold-custom-cart-button-container').classList.remove("displayed-div");
          }
        }
      });
    }

    // update values in deliver freq to include months/weeks
    var timeFrameSelect = document.querySelector('.bold-ro__order-interval-container select.bold-ro__frequency-type');
    var timeFrameValue = timeFrameSelect.options[timeFrameSelect.selectedIndex].text;
    var freqSelect = document.querySelector('.bold-ro__order-interval-container select.bold-ro__frequency-num');
    for (i = 0; i < freqSelect.options.length; i++) {
      freqSelect.options[i].text = freqSelect.options[i].text + " " + timeFrameValue;
    }

    //update deliver freq text in subscription select header area
    var intervalPlaceholder = document.querySelector('.bold-custom-discount-interval');
    if (timeFrameValue.indexOf('Day') > -1) {intervalPlaceholder.innerHTML = "day";}
    if (timeFrameValue.indexOf('Week') > -1) {intervalPlaceholder.innerHTML = "wk.";}
    if (timeFrameValue.indexOf('Month') > -1) {intervalPlaceholder.innerHTML = "mo.";}
    if (timeFrameValue.indexOf('Year') > -1) {intervalPlaceholder.innerHTML = "yr.";}

    //add product custom field info related to subscription options (memos and shipping info)
    var singlePurchaseInfo = document.querySelector('.bold-custom-subscription-product-fields .bold-custom-single_purchase_info');
    var singlePurchaseShippingInfo = document.querySelector('.bold-custom-subscription-product-fields .bold-custom-single_purchase_shipping_info');
    var singlePurchaseTextDiv = singlePurchaseInfo.textContent.length > 0 ? '<div class="bold-custom-single-purchase-info-container subscription-info-details">' + singlePurchaseInfo.textContent + '</div>' : '';
    var truckIcon = '<svg width="20px" viewBox="0 -70 512 512" fill="#7f7f7f" xmlns="http://www.w3.org/2000/svg"><path d="m507.605469 140.964844-80.332031-80.335938c-2.8125-2.816406-6.628907-4.394531-10.605469-4.394531h-65.335938v-1.070313c0-30.417968-24.746093-55.164062-55.164062-55.164062h-241c-30.421875 0-55.167969 24.746094-55.167969 55.164062v200.839844c0 30.417969 24.746094 55.160156 55.167969 55.160156h10.605469c6.96875 34.335938 37.382812 60.257813 73.742187 60.257813 36.355469 0 66.773437-25.921875 73.746094-60.257813h85.476562c6.972657 34.335938 37.386719 60.257813 73.746094 60.257813s66.773437-25.921875 73.746094-60.257813h50.769531c8.285156 0 15-6.714843 15-15v-144.59375c0-3.980468-1.578125-7.792968-4.394531-10.605468zm-97.152344-54.730469 50.335937 50.335937h-109.457031v-50.335937zm-380.453125 169.769531v-200.839844c0-13.875 11.289062-25.164062 25.167969-25.164062h241c13.875 0 25.164062 11.289062 25.164062 25.164062v185.878907c-11.3125 10.503906-19.40625 24.429687-22.59375 40.121093h-85.476562c-6.972657-34.328124-37.390625-60.25-73.746094-60.25s-66.769531 25.921876-73.742187 60.25h-10.605469c-13.878907 0-25.167969-11.285156-25.167969-25.160156zm109.515625 85.417969c-24.949219 0-45.246094-20.304687-45.246094-45.257813 0-24.949218 20.296875-45.25 45.246094-45.25 24.953125 0 45.25 20.300782 45.25 45.25 0 24.953126-20.300781 45.257813-45.25 45.257813zm232.96875 0c-24.953125 0-45.25-20.304687-45.25-45.257813 0-24.949218 20.296875-45.25 45.25-45.25 24.949219 0 45.25 20.300782 45.25 45.25 0 24.953126-20.300781 45.257813-45.25 45.257813zm73.746094-60.257813c-6.972657-34.328124-37.386719-60.25-73.746094-60.25-7.34375 0-14.4375 1.078126-21.152344 3.050782v-57.394532h130.667969v114.597657h-35.769531zm0 0"/></svg>';
    var singlePurchaseShippingInfoTextDiv = singlePurchaseShippingInfo.textContent.length > 0 ? '<div class="bold-custom-single_purchase_shipping_info-container subscription-info-details">' + truckIcon + singlePurchaseShippingInfo.textContent + '</div>' : '';

    var subscriptionShippingInfo = document.querySelector('.bold-custom-subscription-product-fields .bold-custom-subscription_shipping_info');
    var subscriptionInfo = document.querySelector('.bold-custom-subscription-product-fields .bold-custom-subscription_info_1');
    var subscriptionTextDiv = subscriptionInfo.textContent.length > 0 ? '<div class="bold-custom-subscription-info-container subscription-info-details">' + subscriptionInfo.textContent + '</div>' : '';
    var subscriptionShippingInfoTextDiv = subscriptionShippingInfo.textContent.length > 0 ? '<div class="bold-custom-subscription_shipping_info-container subscription-info-details">' + truckIcon + subscriptionShippingInfo.textContent + '</div>' : '';

    var subscriptionTextContainer = document.querySelector('.bold-custom-discount-memo');
    subscriptionTextContainer.innerHTML = subscriptionTextDiv;

    //hide initial add to cart button and add one to each purchase option container
    document.querySelector('#product-form .button-well').style.display = 'none';

    // add cart button to single purchase option
    var cartButton = document.createElement('DIV');
    cartButton.classList.add('bold-custom-cart-button-container', 'displayed-div');
    cartButton.innerHTML = singlePurchaseTextDiv + singlePurchaseShippingInfoTextDiv + '<button type="submit" name="add" class="button cartbutton" data-add-to-cart=""><span data-add-to-cart-text="">Add to Cart</span></button>'
    document.querySelector('.bold-ro__radio-div.bold-ro__one-time-div').appendChild(cartButton);

    // add cart button to subscribe option
    var subscribeButton = document.createElement('DIV');
    subscribeButton.classList.add('bold-custom-cart-button-container')
    subscribeButton.innerHTML = subscriptionShippingInfoTextDiv + '<button type="submit" name="add" class="button cartbutton" data-add-to-cart=""><span data-add-to-cart-text="">Subscribe and save</span></button>'
    document.querySelector('.bold-ro__radio-div.bold-ro__recurring-div').appendChild(subscribeButton);
  }
}