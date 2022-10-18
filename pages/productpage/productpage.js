
// console.log(itemQuantity)

document.querySelector('.btn-cart').addEventListener('click', addToCart)
function addToCart() {
    window.location = "/pages/cart/cart.html"
}
//Getting the element
let item = 10;
// let itemQuantity = document.querySelector(".item-qty").innerHTML;
let addItem = document.querySelectorAll(".add-item");


 for (let i = 0; i < addItem.length; i++) {
  addItem[i].addEventListener('click', addingItem);
 }
 
 let subItem = document.querySelectorAll(".sub-item")


 for (let j = 0; j < subItem.length; j++) {
  subItem[j].addEventListener('click', subtractItem);
 }

//Addition of qty
function addingItem() {
  item++;
  document.querySelector(".item-qty").innerHTML = item;
}



//Subtraction of qty
function subtractItem() {
  if (item <=10) {
    item = 10;
  }else{
    item--;
    document.querySelector(".item-qty").innerHTML = item
  }
}