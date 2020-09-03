// This JS is only for use on the Contact Us page
// Author: David Jahns - david.jahns@smiledirectclub.com

// Validates any email fields to prevent submission if there is a ".con" email address input.
window.addEventListener('load', function(){
  var contactForm = document.querySelector('#contact_form');
  
  var emailInput = document.querySelector('#contact_form input[type=email]');

  // validate email input on blur
  emailInput.addEventListener('blur', function(){
	ValidateEmail(emailInput);
  });
  
  // itercept form submit and validate email 
  contactForm.addEventListener('submit', function(submitEvent){
  	submitEvent.preventDefault();
    
    if(ValidateEmail(emailInput)){
      contactForm.submit();
    } else {
      emailInput.focus();
    }
  });
});



// Function for validating our specific email input on this form.
function ValidateEmail(inputText) {
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,100})+$/;
  var emailInput = document.querySelector('#contact_form input[type=email]');
  var emailInputErrorMessage = document.querySelector('.email-input-error-message');

  if(inputText.value.match(emailformat) && !inputText.value.endsWith('.con')) {
    emailInput.classList.remove('input-error');
    emailInputErrorMessage.classList.remove('email-input-error-message--showing');
    return true;
  } else {
    emailInput.classList.add('input-error');
    emailInputErrorMessage.classList.add('email-input-error-message--showing');
    return false;
  }
}
