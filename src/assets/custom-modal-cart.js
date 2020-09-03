// This JS has been added for customizing the cart interaction within the snippets/modal-cart.liquid only. Do not use this file for anything else.
// This code handles updating the UI reflecting the totals and prices of products in the cart. It is only updating the front end UI, and not controlling the actual prices that reflect on the final checkout page. 
// Author: David Jahns - david.jahns@smiledirectclub.com

window.addEventListener("load", function(){
  const quantityButtons = document.querySelectorAll('button[data-product-increment-type]'); // get all the increment / decrement buttons for cart items
  // get the subtotal from DOM and turn it into an Int
  let subtotalDisplay = document.querySelector('.cart-subtotal .cart-summary-value').innerText;
  let subtotalTotal = parseInt(subtotalDisplay.substring(1));
  // get the savings total from DOM and turn it into an Int
  let savingsDisplay = document.querySelector('.cart-compare-at-price-savings .cart-summary-value').innerText;
  let savingsTotal = parseInt(savingsDisplay.substring(2));
  // get the estimated total from DOM and turn it into an Int
  let estimatedTotalDisplay = document.querySelector('.cart-estimated-total .cart-summary-value').innerText;
  let estimatedTotal = parseInt(estimatedTotalDisplay.substring(1));
  
  quantityButtons.forEach(function(button){
    // listen to every button for click
    button.addEventListener('click', function(buttonClickEvent){
      const itemQuantityDisplay = buttonClickEvent.target.parentElement.querySelector('[data-product-quantity]'); // product quantity between + - buttons
      let newQuantity, oldQuantity = parseInt(itemQuantityDisplay.innerText); // get the value of the quantity displayed for the button clicked and make it an Int
      const buttonType = buttonClickEvent.target.getAttribute('data-product-increment-type'); // this attribute identifies if button is increment or decrement
      const cartItemContent = buttonClickEvent.target.parentElement.parentElement.parentElement;
      const itemActualPrice = parseInt(cartItemContent.querySelector('.cart-item--price > p').innerText.substring(1));


      // Set discount per item based on quantity. only set IF there is a compare at price for the item
      let itemCompareAtPrice = cartItemContent.querySelector('.cart-item--compare-at-price');

      if(itemCompareAtPrice) {
        itemCompareAtPrice = parseInt(itemCompareAtPrice.innerText.substring(1))
      } else {
        itemCompareAtPrice = itemActualPrice;
      }

      let itemDiscountPerQuantity = itemCompareAtPrice - itemActualPrice;
    

      // update values when item quantity is incremented or decremented in the cart
      if (buttonType === "increment") {
        newQuantity = oldQuantity + 1;
        savingsTotal += itemDiscountPerQuantity;

        if (itemCompareAtPrice) {
          subtotalTotal += itemCompareAtPrice;
        } else {
          subtotalTotal += itemActualPrice;
        }
      }

      if (buttonType === "decrement") {
        newQuantity = oldQuantity - 1;
        savingsTotal -= itemDiscountPerQuantity;

        if (itemCompareAtPrice) {
          subtotalTotal -= itemCompareAtPrice;
        } else {
          subtotalTotal -= itemActualPrice;
        }
      }

      // set estimated total every time an item quantity is changed
      estimatedTotal = subtotalTotal - savingsTotal;
      
      // update subtotal display
      document.querySelector('.cart-subtotal .cart-summary-value').innerText = "$" + subtotalTotal.toFixed(2);
      // update Savings display
      document.querySelector('.cart-compare-at-price-savings .cart-summary-value').innerText = "-$" + savingsTotal.toFixed(2);
	    // update Estimated Total display
      document.querySelector('.cart-estimated-total .cart-summary-value').innerText = "$" + estimatedTotal.toFixed(2);

    });
  });
});
