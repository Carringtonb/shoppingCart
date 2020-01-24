/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product]
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
      var dropdownItem = document.createElement('option')
      dropdownItem.textContent = Product.allProducts[i].name;
      selectElement.appendChild(dropdownItem);
      document.getElementsByTagName('option')[i].setAttribute('value', Product.allProducts[i].name)
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
    event.preventDefault();
  // TODO: Prevent the page from reloading
   var submitedItem =  document.getElementById('items').value;
   var submittedQuantity = document.getElementById('quantity').value;
   if (submitedItem)
  // Do all the things ...
  addSelectedItemToCart(submitedItem, submittedQuantity);
  cart.saveToLocalStorage();//CARRINGTON/ANTHONY SWITCH DRIVERS
  updateCounter();
  updateCartPreview();
// console.log(event.target.id);
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(submitedItem, submittedQuantity) {
    cart.addItem(submitedItem, submittedQuantity);
  // console.log(cart.items[0].quantity);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
 var counter = cart.items.length;
  console.log(counter);
//   for(var i = 0; i < cart.items.length; i++){
//     counter += Number(cart.items[i].quantity);
if(document.getElementsByTagName('article')[0]){
  var counterText = document.getElementsByTagName('article')[0];
  counterText.remove();
  } 
var previewSections = document.getElementsByClassName('card')[0];
var counterText = document.createElement('article');
counterText.textContent = "You have " + counter + " items in your cart.";
previewSections.appendChild(counterText);
}


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();