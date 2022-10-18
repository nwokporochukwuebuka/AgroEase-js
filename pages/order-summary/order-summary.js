// Making sure that the documents loads before anything 
// happens with this page

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready(){

    // first we check the localStorage to read variables 
    var cardDetails = getData('cartItems');

    for (var i = 0; i < cardDetails.length; i++){
        var price = cardDetails[i].price;
        var name = cardDetails[i].title;
        var image = cardDetails[i].image;

        // now that we have read what is in the local storage
        // the next step is to create the card item to
        // fit everything

        createCartItem(price, name, image);
        updateCartTotal()
    }


    let addItem = document.getElementsByClassName("add-item");


    for (let i = 0; i < addItem.length; i++) {
        addItem[i].addEventListener('click', addingItem);
    }
    
    let subItem = document.querySelectorAll(".sub-item");


    for (let j = 0; j < subItem.length; j++) {
        subItem[j].addEventListener('click', subtractItem);
    }

    //Addition of qty
    function addingItem(event) {
        var numberClicked = event.target;
        var itemNumber = numberClicked.parentElement.getElementsByClassName('item-qty')[0];
        itemNumber.innerText = Number(itemNumber.innerText) + 1;
    }

    //Subtraction of qty
    function subtractItem(event) {
        var numberClicked = event.target;
        var itemNumber = numberClicked.parentElement.getElementsByClassName('item-qty')[0];

        if (Number(itemNumber.innerText) <= 1) {
            itemNumber = 1;
        } else {
            var numberClicked = event.target;
            itemNumber.innerText = Number(itemNumber.innerText) - 1;
        }
    }

    var removeCartItemButtons = document.getElementsByClassName('mine');

    // looping through to get the exact cancel buttons
    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItems);
    }


    // FROM HERE IS NOT RESPONDING
    var quantityInputs = document.getElementsByClassName('item-qty')[0];
    console.log(quantityInputs)

    // for (var i = 0; i < quantityInputs.length; i++){
    //     quantityInputs[i].value = 1;
    // } 

    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}


// Add to cart items
function createCartItem(price, name, image){
    var cartRow = document.createElement('div');
    cartRow.classList.add('summary-item-container');
    var cartItems = document.getElementsByClassName('summary-order-container-items')[0];
    var cartRowContents = `
            <div class="summary-item-image"><img src="${image}" alt=""></div>
            <div class="summary-item-description">
                <i class="uil uil-times mine"></i>
                <p class="summary-item-name">${name}</p>
                <div class="add-sub-qty">
                    <span class="sub-item">-</span>
                    <span class="item-qty">1</span>
                    <span class="add-item">+</span>
                </div>
                <p class="summary-price">N${price}</p>
            </div>
    `
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('mine')[0].addEventListener('click', removeCartItems)
}

// This function will be triggered anytime a cart item is removed
function removeCartItems(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}


function quantityChanged(event){
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('summary-order-container-items')[0];

    var cartRows = cartItemContainer.getElementsByClassName('summary-item-container');

    var total = 0;

    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('summary-price')[0];
        var quantityElement = cartRow.getElementsByClassName('item-qty')[0];
        var price = parseFloat(priceElement.innerText.replace('N', '').replace(',', ''));
        var quantity = Number(quantityElement.innerText);

        total += (price * quantity);
    }

    // making sure that our total is in two decimal places
    total = Math.round(total * 100) / 100;

    console.log(document.getElementsByClassName('summary-total')[0])

    console.log(total)

    document.getElementsByClassName('summary-total')[0].innerText = 'N' + total;
}

// UTILITY FUNCTION
function getData(value){
    return JSON.parse(localStorage.getItem(value))
}


/*
The logic behind the add to cart is to first check the 
local storage for objects (These objects contains the name
    of the items and their prices at that time.)

    These object names and prices are going to be read and 
    be put in a pre-built card. 

    So, for any time an object is added to cart, these are
    the number of steps that are taken:

    1. Click add to cart
    2. The item name and price will be added to a localStorage
    object.
    3. When the add to cart page is visited, the localStorage
    is read
    4. if the local storage is empty, there'll be no item
    dispplayed rather a message saying that no items have 
    been added to cart.
    5. If items have been added to cart, the there will be a
    prebuilt card waiting for the names and items to be 
    displayed with appropriate number of classes, and the
    total to sum the prices of all the items.


    Important things to watch out for

    1. Do not allow to input negative quantity
    2. Immediately the quantity is changed, let the total be updated 

*/