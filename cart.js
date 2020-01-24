/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cartItems);
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
// if(document.getElementsByTagName('ul')[1]){
//   var previewText = document.getElementsByTagName('ul')[1];
//   previewText.remove();
//   } 

// var previewSections = document.getElementById('cartContents');
// var previewList = document.createElement('ul');
// previewList.textContent = 'Your cart:'
// previewSections.appendChild(previewList);
// for(var i = 0; i < cart.items.length; i++){
//   var newLI = document.createElement('li');
//   newLI.textContent = `${cart.items[i].product}: ${cart.items[i].quantity}`;
//   previewList.appendChild(newLI);
// }
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
var tableBody = document.getElementsByTagName('tbody')[0];
for (var i = 0; i < cart.items.length; i++){
  var tableRow = document.createElement('tr');
  var tableProduct = document.createElement('td');
  var tableQuantity = document.createElement('td');
  tableProduct.textContent = cart.items[i].product;
  tableQuantity.textContent = cart.items[i].quantity;
  tableRow.appendChild(tableProduct);
  tableRow.appendChild(tableQuantity);
  tableBody.appendChild(tableRow);
}

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();