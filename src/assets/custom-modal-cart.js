// This JS has been added for customizing the cart interaction within the snippets/modal-cart.liquid only. Do not use this file for anything else.
// This code handles updating the UI reflecting the totals and prices of products in the cart. It is only updating the front end UI, and not controlling the actual prices that reflect on the final checkout page. 
// Author: David Jahns - david.jahns@smiledirectclub.com

window.addEventListener("load", function() {
  // get all the increment / decrement buttons for cart items
  const quantityButtons = document.querySelectorAll('button[data-product-increment-type]');
  // get all the remove buttons for cart items
  const removeButtons = document.querySelectorAll('.cart-item--remove-button');
  // get the subtotal from DOM and turn it into an Int
  const subtotalElement = document.querySelector('.cart-subtotal .cart-summary-value');
  let subtotalValue = parseInt(subtotalElement.innerText.substring(1));
  // get the savings total from DOM and turn it into an Int
  const savingsElement = document.querySelector('.cart-compare-at-price-savings .cart-summary-value');
  let savingsValue = parseInt(savingsElement.innerText.substring(2));
  // get the estimated total from DOM and turn it into an Int
  const estimatedTotalElement = document.querySelector('.cart-estimated-total .cart-summary-value');
  let estimatedTotalValue = parseInt(estimatedTotalElement.innerText.substring(1));
  

  // Handles cart changes based on + or - button clicks
  /////////////////////////////////////////////////////////
  quantityButtons.forEach(function(button) {
    // listen to every button for click
    button.addEventListener('click', function(buttonClickEvent) {
      // product quantity elementa between + - buttons
      const itemQuantityElement = buttonClickEvent.target.parentElement.querySelector('[data-product-quantity]');
      // get the value of the quantity displayed for the button clicked and make it an Int
      let newQuantityValue, oldQuantityValue = parseInt(itemQuantityElement.innerText);
      // this attribute identifies if button is increment or decrement
      const quantityButtonType = buttonClickEvent.target.getAttribute('data-product-increment-type');
      const cartItemContent = buttonClickEvent.target.parentElement.parentElement.parentElement;
      const itemActualPriceValue = parseInt(cartItemContent.querySelector('.cart-item--price > p').innerText.substring(1));
      const itemCompareAtPriceElement = cartItemContent.querySelector('.cart-item--compare-at-price');


      // Set discount per item based on quantity. only set IF there is a compare at price for the item
      if (itemCompareAtPriceElement) {
        itemCompareAtPriceValue = parseInt(itemCompareAtPriceElement.innerText.substring(1))
      } else {
        itemCompareAtPriceValue = itemActualPriceValue;
      }

      let itemDiscountPerQuantity = itemCompareAtPriceValue - itemActualPriceValue;
    

      // update values when item quantity is incremented or decremented in the cart
      if (quantityButtonType === "increment") {
        newQuantityValue = oldQuantityValue + 1;
        savingsValue += itemDiscountPerQuantity;

        if (itemCompareAtPriceElement) {
          subtotalValue += itemCompareAtPriceValue;
        } else {
          subtotalValue += itemActualPriceValue;
        }
      }

      if (quantityButtonType === "decrement") {
        newQuantityValue = oldQuantityValue - 1;
        savingsValue -= itemDiscountPerQuantity;

        if (itemCompareAtPriceElement) {
          subtotalValue -= itemCompareAtPriceValue;
        } else {
          subtotalValue -= itemActualPriceValue;
        }
      }


      // set estimated total every time an item quantity is changed
      estimatedTotalValue = subtotalValue - savingsValue;
      

      // update subtotal display
      subtotalElement.innerText = "$" + subtotalValue.toFixed(2);
      // update Savings display
      savingsElement.innerText = "-$" + savingsValue.toFixed(2);
	    // update Estimated Total display
      estimatedTotalElement.innerText = "$" + estimatedTotalValue.toFixed(2);
    });
  });
  // end quantity button handling 



  // Handles cart changes based on "remove" buttons clicked
  ////////////////////////////////////////////////////
  removeButtons.forEach(function(button) {
    button.addEventListener('click', function(buttonClickEvent) {
      // product quantity elementa between + - buttons
      const itemQuantityElement = buttonClickEvent.target.parentElement.querySelector('[data-product-quantity]');
      // get the value of the quantity displayed for the button clicked and make it an Int
      let quantityValue = parseInt(itemQuantityElement.innerText);
      const cartItemContent = buttonClickEvent.target.parentElement.parentElement.parentElement;
      const itemActualPriceValue = parseInt(cartItemContent.querySelector('.cart-item--price > p').innerText.substring(1));
      const itemCompareAtPriceElement = cartItemContent.querySelector('.cart-item--compare-at-price');
      let valueToRemoveFromTotals = 0;

      // If there is a compare at price
      if (itemCompareAtPriceElement) {
        itemCompareAtPriceValue = parseInt(itemCompareAtPriceElement.innerText.substring(1));
        valueToRemoveFromTotals = quantityValue * itemCompareAtPriceValue;
        let itemDiscountPerQuantity = (itemCompareAtPriceValue - itemActualPriceValue) * quantityValue;
        // only update the savings value if it had a compare at price
        savingsValue -= itemDiscountPerQuantity;
      } else {
        valueToRemoveFromTotals = quantityValue * itemActualPriceValue;
      }


      // update subtotal and estimated total values based on element removed
      subtotalValue -= valueToRemoveFromTotals;
      estimatedTotalValue = subtotalValue - savingsValue;


      // update subtotal display
      subtotalElement.innerText = "$" + subtotalValue.toFixed(2);
      // update Savings display
      savingsElement.innerText = "-$" + savingsValue.toFixed(2);
	    // update Estimated Total display
      estimatedTotalElement.innerText = "$" + estimatedTotalValue.toFixed(2);
    });
  });
});
