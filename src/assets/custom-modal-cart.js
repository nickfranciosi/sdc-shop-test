// This JS has been added for customizing the cart interaction within the snippets/modal-cart.liquid only. Do not use this file for anything else.
// This code handles updating the UI reflecting the totals and prices of products in the cart. It is only updating the front end UI, and not controlling the actual prices that reflect on the final checkout page. 
// Author: David Jahns - david.jahns@smiledirectclub.com

window.addEventListener("load", function() {
  // Get modal cart element
  const modalCart = document.querySelector('#modalCart');
  // get the subtotal from DOM and turn it into an Int
  const cartSubtotalElement = document.querySelector('.cart-subtotal .cart-summary-value');
  // if there is an item with savings, get the savings total from DOM and turn it into an Int
  const cartSavingsElement = document.querySelector('.cart-compare-at-price-savings .cart-summary-value');
  // get the estimated total from DOM and turn it into an Int
  const cartEstimatedTotalElement = document.querySelector('.cart-estimated-total .cart-summary-value');

  // Config for modalCartObserver 
  const modalCartObserverConfig = { 
    attributes: true, 
    childList: false, 
    subtree: false 
  };

  // Create an observer to observe #modalCart
  var modalCartObserver = new MutationObserver(modalCartObserverCallback);

  // Start observing modal cart for changes to class list i.e. when the open class is added
  modalCartObserver.observe(modalCart, modalCartObserverConfig);
  
  
  
  
  ///////////////////////////////////////////////////////////
  // Callback function used when observing #modalCart to fire every time it opens.
  ///////////////////////////////////////////////////////////
  function modalCartObserverCallback(mutationsList) {
    mutationsList.forEach(mutation => {
      
      // if cart modal's classlist changes and it has the isOpen class
      if ((mutation.attributeName === 'class') && (modalCart.classList.contains('isOpen'))) {
        
        // update ui with current cart totals every time modal opens
		calculateAndSetCartTotalsForUiOnly();

        //QUANTITY BUTTONS (+ -) watch quantity buttons and update cart when clicked
        recalculateCartAfterClickOnElement('button[data-product-increment-type]', 500);
        
        // REMOVE BUTTONS: watch remove button and update cart when clicked
        recalculateCartAfterClickOnElement('.cart-item--actions a[href="#"]', 750);
      }
      
    });
  };
  // end modalCartObserverCallback(mutationList)
  
  
  
  
  ////////////////////////////////////////////////////////
  // Recalculate cart totals after clicking on element declared by selector. 
  // Optional delay can be provided in milliseconds.
  // 
  // Params: 
  // - selectorOfElementsToWatch - DOM selector for element. will select ALL elements of this selector and attach listener to every one
  // - calculationDelay - provided in milliseconds. set to 0 if nothing provided. 
  ////////////////////////////////////////////////////////
  function recalculateCartAfterClickOnElement(selectorOfElementsToWatch, calculationDelay) {
  	let elementsBeingWatched = document.querySelectorAll(selectorOfElementsToWatch);
    
    // if no delay is provided, set delay to 0
    calculationDelay ? calculationDelay = calculationDelay : calculationDelay = 0;
    
    // get all elements based on selector provided, attach click listener to update cart totals
    elementsBeingWatched.forEach(function(element) {
      element.addEventListener('click', function() {
      	setTimeout(function(){ calculateAndSetCartTotalsForUiOnly() }, calculationDelay);
      });
    });
  };
  // end recalculateCartAfterClickOnElement(selectorOfElementsToWatch, calculationDelay)
  
  
  
  
  ///////////////////////////////////////////////////////////////////
  // Main function that updates the cart totals in the UI/DOM ONLY
  //
  // This function looks at the entire cart and calculates updated values
  // based on all items and quantities every time it runs. 
  ///////////////////////////////////////////////////////////////////
  function calculateAndSetCartTotalsForUiOnly() {
    // get all cart items
    const allCartItems = document.querySelectorAll('#modalCart .cart-item');
    
    let cartSubtotalValue = 0;
    let cartSavingsValue = 0;
    let cartEstimatedTotalValue = 0;
   	
    let cartHasItemsShowingDiscount = false;
    const cartSavingsRow = document.querySelector('.cart-compare-at-price-savings');

    // for each item in the cart
    allCartItems.forEach(function(cartItem) {
      // get item quantity
      const itemQuantityElement = cartItem.querySelector('[data-product-quantity]');
      let itemQuantityValue = parseInt(itemQuantityElement.innerText);

      // get item regular price
      // this selector is overly specific because there are two different HTML templates we have to account for: one comes from cart-item.liquid template, one comes from layout.theme.js
      const itemRegularPriceElement = cartItem.querySelector('.cart-item--info p:not(.cart-item--compare-at-price):not(.cart-item--sub-title)');
	    let itemRegularPriceValue = parseInt(itemRegularPriceElement.innerText.substring(1));
      
      
      // attempt to get a compare at price element
      const itemCompareAtPriceElement = cartItem.querySelector('.cart-item--compare-at-price');
      let itemCompareAtPriceValue = 0;
      let itemSavingsBasedOnQuantityValue = 0;

      // initialize a subtotal value
      let itemSubtotalValue = 0;
      
      // if there's an item compare at price element, update the value, calculate subtotal
      if(itemCompareAtPriceElement) {
        cartHasItemsShowingDiscount = true;
      	itemCompareAtPriceValue = parseInt(itemCompareAtPriceElement.innerText.substring(1));
        // set item savings to item quantity * (item regular price - item compare price) - set as positive number
        itemSavingsBasedOnQuantityValue = Math.abs(itemQuantityValue * (itemRegularPriceValue - itemCompareAtPriceValue));
        // set subtotal based on compare price
        itemSubtotalValue = itemQuantityValue * itemCompareAtPriceValue;
      } else {
        // set subtotal based on regular price
        itemSubtotalValue = itemQuantityValue * itemRegularPriceValue;
      }

      
      // set item estimated total to item subtotal - item savings
      let itemEstimatedTotalValue = itemSubtotalValue - itemSavingsBasedOnQuantityValue;


      // set cart estimated total += item estimated total
      cartSubtotalValue += itemSubtotalValue;
      cartSavingsValue += itemSavingsBasedOnQuantityValue;
      cartEstimatedTotalValue += itemEstimatedTotalValue;
    });

	// Remove "Savings" row if no cart items are displaying the compare at price 
    if(cartHasItemsShowingDiscount === false && cartSavingsRow) {
    	cartSavingsRow.style.display = "none";
    }
    
    // update cart subtotal display
    cartSubtotalElement.innerText = "$" + cartSubtotalValue.toFixed(2);

    // if savings, update cart savings display
    if(cartSavingsElement) {
      cartSavingsElement.innerText = "-$" + cartSavingsValue.toFixed(2);
    }

    // update cart estimated total display
    cartEstimatedTotalElement.innerText = "$" + cartEstimatedTotalValue.toFixed(2);
  };
  // end calculateAndSetCartTotalsForUiOnly()
  
});