// This JS is only for use on the Contact Us page
// Author: David Jahns - david.jahns@smiledirectclub.com

// Validates any email fields to prevent submission if there is a ".con" email address input.
window.addEventListener('load', function(){
  
  var contactForm = document.querySelector('#contact_form');
  var nameInput = document.querySelector('#ContactFormName');
  var emailInput = document.querySelector('#ContactFormEmail');
  var phoneInput = document.querySelector('#ContactFormPhone');
  var messageInput = document.querySelector('#ContactFormMessage');
  var allInputs = [nameInput, emailInput, phoneInput, messageInput];
  var errorMessageShowingClass = 'input-error-message--showing';
  var inputErrorClass = 'input-error';
  var noInputsAreEmpty = false;
  var emailIsValid = false;
  var phoneIsValid = false;
  
  
  
  ///////////////////////////////////////
  // Validate each input on BLUR
  ////////////////////////////////////////
  // validate email input on blur
  emailInput.addEventListener('blur', function(){
    validateEmail(emailInput);
  });
  
  
  // validate name input on blur
  nameInput.addEventListener('blur', function(){
     checkIfInputIsEmpty(nameInput);
  });
  
  // validate phone input on blur
  phoneInput.addEventListener('blur', function(){
     validatePhone(phoneInput);
  });
  
  
  // validate message input on blur
  messageInput.addEventListener('blur', function(){
     checkIfInputIsEmpty(messageInput);
  });
  
  
  
  ///////////////////////////////////////
  // Validate whole form on SUBMIT
  //////////////////////////////////////// 
  contactForm.addEventListener('submit', function(submitEvent){
  	submitEvent.preventDefault();
    validateAllInputs();
    if(noInputsAreEmpty && emailIsValid && phoneIsValid){
      contactForm.submit();
    }
  });
  
  
  
  // Function for validating our specific email input
  function validateEmail(inputText) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,100})+$/;
    var emailInputErrorMessage = emailInput.nextElementSibling;

    if(inputText.value.match(emailFormat) && !inputText.value.endsWith('.con')) {
      emailInput.classList.remove(inputErrorClass);
      emailInputErrorMessage.classList.remove(errorMessageShowingClass);
      emailIsValid = true;
    } else {
      emailInput.classList.add(inputErrorClass);
      emailInputErrorMessage.classList.add(errorMessageShowingClass);
      emailIsValid = false;
    }
  };
  
  
  // function for validating our specific phone input
  function validatePhone(inputText) {
    var phoneInputErrorMessage = phoneInput.nextElementSibling;
    var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputText.value.match(phoneFormat)) {
        phoneInput.classList.remove(inputErrorClass);
        phoneInputErrorMessage.classList.remove(errorMessageShowingClass);
    	phoneIsValid = true;
    } else {
	   phoneInput.classList.add(inputErrorClass);
       phoneInputErrorMessage.classList.add(errorMessageShowingClass);
       phoneIsValid = false;
    }
  } 
  
  
  
  // Validate all inputs
  function validateAllInputs(){
    checkIfInputIsEmpty(nameInput);
    validateEmail(emailInput);
    validatePhone(phoneInput);
    checkIfInputIsEmpty(messageInput);
  };
  
  
  // Validating whether an input is empty
  function checkIfInputIsEmpty(input) {
  	if(input.value.length <= 0) {
      input.classList.add(inputErrorClass);
      input.nextElementSibling.classList.add(errorMessageShowingClass);
      noInputsAreEmpty = false;
    } else {
      input.classList.remove(inputErrorClass);
      input.nextElementSibling.classList.remove(errorMessageShowingClass);
      noInputsAreEmpty = true;
    }
  };
  
}); // end window.load


