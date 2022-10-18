//const produce = require("../../data/produce");
const products = [
  {
    name: "Day Old Commercial Turkey",
    desc: "Day Old  Turkey (Nicholas brand)",
    price: "3,500",
    image: "/assets/Day-old-Turkeys.jpg",
  },
  {
    name: "Rice",
    desc: "Nigerian made rice",
    price: "30,000",
    image: "/assets/rice-bag.png",
  },
  {
    name: "Garri",
    desc: "Quality Local Garri",
    price: "20,000",
    image: "/assets/garri.jpg",
  },
  {
    name: "Palm Oil",
    desc: "Best Red oil",
    price: "15,000",
    image: "/assets/red oil.jpg",
  },
  {
    name: "Yam",
    desc: "Big Yams",
    price: "3,000",
    image: "/assets/yam.jpg",
  },
  {
    name: "Turkey",
    desc: "Big Turkey",
    price: "8,000",
    image: "/assets/turkey.jpg",
  },
  {
    name: "Broillers",
    desc: "Broiler Birds",
    price: "5,000",
    image: "/assets/broilers.jpg",
  },
  {
    name: "Cow",
    desc: "Nigeria Trained Cows",
    price: "120,000",
    image: "/assets/cows.png",
  },
  {
    name: "Cocoa",
    desc: "Best Quality Cocoa",
    price: "20,000",
    image: "/assets/cocoa.jpg",
  },
  {
    name: "Pigs",
    desc: "Home trained pigs",
    price: "75,000",
    image: "/assets/pigs.jpg",
  },
  {
    name: "Palm Fruits",
    desc: "Fresh and Quality palm oil fruits",
    price: "20,000",
    image: "/assets/palm-fruit.png",
  },
  {
    name: "Cow Milk",
    desc: "Best Moisturied Cow Milk",
    price: "10,000",
    image: "/assets/cow-milk.jpg",
  },
  {
    name: "Harvester Machine",
    desc: "Use for bountiful harvesting ",
    price: "400,000",
    image: "/assets/harvester.jpg",
  },
  {
    name: "Canned Tomatoes",
    desc: "Quality and Nutritious canned Tomatoes",
    price: "13,000",
    image: "/assets/tin-tomatoees.jpg",
  },
  {
    name: "Bitter Kola",
    desc: "Original Nigeria Bitter Kola",
    price: "2,000",
    image: "/assets/bitter-kola.png",
  },
  {
    name: "Carrot",
    desc: "Fresh carrots from farm",
    price: "4,000",
    image: "/assets/carrots.png",
  },
  {
    name: "Eggs",
    desc: "Sets of Eggs available",
    price: "3,000",
    image: "/assets/eggs.jpg",
  },
  {
    name: "Ginger",
    desc: "Fresh Nigeria Ginger from farm",
    price: "5,000",
    image: "/assets/ginger.png",
  },
];

// LIVESTOCKS
const liveStockProducts = [
  {
    name: "Cockrel",
    desc: "Home trained chicken",
    price: "5,000",
    image: "/assets/chickens.png",
  },
  {
    name: "Broilers",
    desc: "3 months broilers",
    price: "700",
    image: "/assets/broilers.jpg",
  },
  {
    name: "Chicks",
    desc: "Day old chilcks of all sizes",
    price: "20,000",
    image: "/assets/day-old.jpg",
  },
  {
    name: "Cow",
    desc: "Cows are available",
    price: "150,000",
    image: "/assets/cows.png",
  },
  {
    name: "Pigs",
    desc: "Home trained pigs",
    price: "75,000",
    image: "/assets/pigs.jpg",
  },
  {
    name: "Goat",
    desc: "Home trained goats",
    price: "29,000",
    image: "/assets/goat.jpg",
  },
  {
    name: "Turkey<",
    desc: "Turkey birds available",
    price: "15,000",
    image: "/assets/turkey.jpg",
  },
  {
    name: "Eggs",
    desc: "Sets of Eggs available",
    price: "3,000",
    image: "/assets/eggs.jpg",
  },
  {
    name: "Live Fish",
    desc: "Live fresh fish from pond",
    price: "7,000",
    image: "/assets/fish.jpg",
  },
];
// CROPS
const cropsProduct = [
  {
    name: "Cashew Nuts",
    desc: "Cashew nuts available",
    price: "5,000",
    image: "/assets/cashew.png",
  },
  {
    name: "Cocoa",
    desc: "Fresh Nigeria Cocoa",
    price: "85,0000",
    image: "/assets/cocoa.jpg",
  },
  {
    name: "Palm Fruits",
    desc: "Fresh and Quality palm oil fruits",
    price: "20,000",
    image: "/assets/palm-fruit.png",
  },
  {
    name: "Onions",
    desc: "Fresh big Onions ",
    price: "35,000",
    image: "/assets/onions.png",
  },
  {
    name: "Ginger",
    desc: "Fresh Nigeria Ginger from farm",
    price: "5,000",
    image: "/assets/ginger.png",
  },
  {
    name: "Tiger Nuts",
    desc: "Fresh Nigeria Tigger Nuts",
    price: "9,000",
    image: "/assets/tigernut.png",
  },
  {
    name: "Yam",
    desc: "Big Yams",
    price: "3,000",
    image: "/assets/yam.jpg",
  },
  {
    name: "Bitter Kola",
    desc: "Original Nigeria Bitter Kola",
    price: "2,000",
    image: "/assets/bitter-kola.png",
  },
  {
    name: "Carrot",
    desc: "Fresh carrots from farm",
    price: "4,000",
    image: "/assets/carrots.png",
  },
];
// FARM INPUTS
const farmInputs = [
  {
    name: "Herbicides",
    desc: "Weed spray and die ",
    price: "5,000",
    image: "/assets/herbicide.jpg",
  },
  {
    name: "Fertility Chemical",
    desc: "Soil fertility chemical",
    price: "6,000",
    image: "/assets/chemicals.jpg",
  },
  {
    name: "pesticides",
    desc: "Anti-pest survival chemical",
    price: "3,000",
    image: "/assets/pesticides.jpg",
  },
  {
    name: "NPK Fertilizers",
    desc: "The three macro-nutrients Fertilizer available  ",
    price: "20,000",
    image: "/assets/npk-fertilizer.jpg",
  },
  {
    name: "Urea Fertilizer",
    desc: "Urea soil fertilizer available",
    price: "20,000",
    image: "/assets/urea-fertilizer.jpg",
  },
  {
    name: "Gel fertilizer",
    desc: "Gel Liquid Fertilizer",
    price: "15,000",
    image: "/assets/gel-liquid-fertilizer.jpg",
  },
  {
    name: "Starters Feed",
    desc: "Day old chicks feeds",
    price: "25,000",
    image: "/assets/starter-feed.jpg",
  },
  {
    name: "Growers Feed",
    desc: "Chicken Grower feeds from three weeks",
    price: "25,000",
    image: "/assets/growers-feed.jpg",
  },
  {
    name: "Finishers Feed",
    desc: "Broiler Finishers Feed",
    price: "30,000",
    image: "/assets/broiler-finishers.jpg",
  },
];
// PROCESSED PRODUCTS
const processedProduct = [
  {
    name: "Beans Flour",
    desc: "Quality Beans flour for moi-moi",
    price: "8,000",
    image: "/assets/beans-flour.png",
  },
  {
    name: "Cassava Flour",
    desc: "Quality Cassava flour ",
    price: "10,000",
    image: "/assets/cassava-flour.jpg",
  },
  {
    name: "Yam Flour",
    desc: "Quality Yam flour for bounded yam",
    price: "8,500",
    image: "/assets/yam-flour.jpg",
  },
  {
    name: "Patato Flake",
    desc: "Nutritious Patato flake ",
    price: "6,000",
    image: "/assets/patotoes-flake.jpg",
  },
  {
    name: "Canned Tomatoes",
    desc: "Quality and Nutritious canned Tomatoes",
    price: "13,000",
    image: "/assets/tin-tomatoees.jpg",
  },
  {
    name: "Pure Red Oil",
    desc: "Pure and supervised locally processed red oil",
    price: "9,000",
    image: "/assets/red oil.jpg",
  },
  {
    name: "Cow Milk",
    desc: "Best Moisturied Cow Milk",
    price: "10,000",
    image: "/assets/cow-milk.jpg",
  },
  {
    name: "Cow hide & skin meat",
    desc: "Cow Quality hide & skin (Kpomo)",
    price: "25,000",
    image: "/assets/cow-canda-meat.jpg",
  },
  {
    name: "Garri",
    desc: "Best Granulate garri",
    price: "14,000",
    image: "/assets/garri.jpg",
  },
];

// EQUIPMENTS
const equipment = [
  {
    name: "Sprayer Machine",
    desc: "Paterol powered sprayer machine",
    price: "95,000",
    image: "/assets/petrol-powered-sprayer.jpg",
  },
  {
    name: "sprayer kit",
    desc: "Crop Sprayer Kit ",
    price: "7,000",
    image: "/assets/crop-sprayer.jpg",
  },
  {
    name: "Boot",
    desc: "Long lasting safty boot",
    price: "6,500",
    image: "/assets/boots.jpg",
  },
  {
    name: "Hand Glove",
    desc: "Long lasting safty glove",
    price: "3,000",
    image: "/assets/hand-glove.jpg",
  },
  {
    name: "Plow machine",
    desc: "Plow machine available ",
    price: "120,000",
    image: "/assets/plows.jpg",
  },
  {
    name: "Tractor",
    desc: "Long Lasting tractor for soil tilling",
    price: "250,000",
    image: "/assets/tractor.jpg",
  },
  {
    name: "Wheel Barrow",
    desc: "Use for carrying of farm crops",
    price: "10,000",
    image: "/assets/wheel-barrow.jpg",
  },
  {
    name: "Harvester Machine",
    desc: "Use for bountiful harvesting ",
    price: "400,000",
    image: "/assets/harvester.jpg",
  },
  {
    name: "Hoe",
    desc: "Original strong hoe",
    price: "2,500",
    image: "/assets/hoe.jpg",
  },
];

let pagination_elemnts = document.querySelector("#pagination");

let current_page = 1;
let numberOfItems = 6;
//OUR MARKET UI DISPLAY WHEN CLICKED FROM THE SIDEBAR
const ourMarket = document.getElementById("ourMarket.html");
const liveStocks = document.getElementById("livestock");
const cropsProduce = document.getElementById("crops");
const farm_inputs = document.getElementById("farmInput");
const processed_products = document.getElementById("processed");
const farmEquipments = document.getElementById("equipments");
window.onload = displayProducts(
  current_page,
  numberOfItems,
  "Our Market",
  products
);
// liveStocks.addEventListener("click", displayProducts);
liveStocks.addEventListener("click", function () {
  // api calls
  displayProducts(1, numberOfItems, "Live Stock", liveStockProducts);
});

// FOR CROPS
cropsProduce.addEventListener("click", function () {
  // api calls
  displayProducts(1, numberOfItems, "Crops", cropsProduct);
});

// FARM INPUTS
farm_inputs.addEventListener("click", function () {
  // api calls
  displayProducts(1, numberOfItems, "Farm Inputs", farmInputs);
});

// PROCESSED PRODUCTS
processed_products.addEventListener("click", function () {
  // api calls
  displayProducts(1, numberOfItems, "Processed Products", processedProduct);
});
// FOR EQUIPENTS
farmEquipments.addEventListener("click", function () {
  // api calls
  displayProducts(1, numberOfItems, "Farm Equipments", equipment);
});

function displayProducts(current_page, numberOfItems, header, produce) {
  current_page--;
  let start = current_page * numberOfItems;
  let end = start + numberOfItems;
  let PaginationItems = produce.slice(start, end);

  // header for out goods
  const headerEle = document.createElement("h2");
  headerEle.innerText = header;
  // container for all produce
  const producstContainer = document.createElement("div");
  producstContainer.className = "container-card";

  ourMarket.innerHTML = ``;

  const cards = PaginationItems.map((produceItem) => {
    return `<div class="card">
    <div class="bag">
    <img src="${produceItem.image}"  alt="" class="cart-item-image">
    </div>
    <div class="price">
    <h3 class="cart-item-name">${produceItem.name}</h3>
  <p>${produceItem.desc}</p>
  <span>Seller: Agroease</span>
  <h4>Price: N<span class="cart-item-price">${produceItem.price.toLocaleString()}</span></h4>
  <div class="share">
  <div class="carte" id="carte">
          <svg xmlns="http://www.w3.org/2000/svg"
           width="16" height="16" fill="currentColor" 
           class="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
            0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
             .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
              11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
               3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
                9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
                 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
                  1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                   1 0 0 1 0-2z"/>
          </svg>
        </div>
        <div class="by-me">
          <button id="buy" class="buy-btn">Buy Now</button>
      </div>
    </div>
      </div>
  </div>
  `;
  });
  cards.forEach((card) => {
    const produceCard = document.createElement("div");
    produceCard.innerHTML = card;
    producstContainer.appendChild(produceCard);
  });
  ourMarket.appendChild(headerEle);
  ourMarket.appendChild(producstContainer);
  setUpPagination(current_page, numberOfItems, header, produce);
}

//CARD BUY BUTTON
let buyButton = document.querySelectorAll(".buy-btn");
//for (let i = 0; i < buyButton.length; i++)
buyButton.forEach((buyMe) => {
  buyMe.addEventListener("click", openDescribtion);
});

function openDescribtion() {
  window.location = "/pages/productpage/productpage.html";
}
// PAGINATION STARTS

function setUpPagination(
  current_page,
  numberOfItems,
  header,
  // produce
  items
  // numberOfItems
  // pagination_elemnts
) {
  pagination_elemnts.innerHTML = "";
  let PageCount = Math.ceil(items.length / numberOfItems);
  for (let i = 1; i < PageCount + 1; i++) {
    let btn = PaginationButton(items, i, header);
    pagination_elemnts.appendChild(btn);
  }
}

function PaginationButton(items, page, header) {
  let button = document.createElement("button");
  button.innerText = page;
  if (current_page === page) {
    button.classList.add("active");
  }
  button.addEventListener("click", function () {
    current_page = page;
    displayProducts(current_page, numberOfItems, header, items);
    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}

// PAGINATION ENDS

// SLIDER IMAGES
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 10000); // Change image every 10 seconds
}

//search dfkm

const searchInput = document.getElementById("input");
// const button = document.querySelector('#searchbutton');
const display = document.querySelector(".display-items");
const searchWrapper = document.querySelector(".input-search");
const resultsWrapper = document.querySelector(".searchresults");
const list = document.getElementById("searchlist");
const suggBox = document.querySelector(".autocomplete");
let results = [];

searchInput.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  let input = searchInput.value;
  if (input.length) {
    results = products.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchString) &&
        item.name.toLowerCase().includes(input)
      );
    });
  }
  console.log(results);
  renderResults(results);
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".searchresults")) {
    return resultsWrapper.classList.add("removeresults");
  } else if (e.target.closest(".autocomplete")) {
    return suggBox.classList.add("removeresults");
  }
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove("show");
  }
  const content = results.map((item) => {
    return `<div class="searchcard">
          <div class="searchbag">
          <img src="${item.image}"  alt="">
          </div>
          <div class="searchprice">
          <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <span>Seller: Agroease</span>
        <h4>Price: N${item.price.toLocaleString()}</h4>
        <div class="searchshare">
        <div class="searchcarte">
                <svg xmlns="http://www.w3.org/2000/svg"
                 width="16" height="16" fill="currentColor" 
                 class="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
                  0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
                   .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
                    11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
                     3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
                      9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
                       2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
                        1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                         1 0 0 1 0-2z"/>
                </svg>
              </div>
              <div class="by-me">
                <button id="buy">Buy Now</button>
            </div>
          </div>
            </div>
        </div>
        `;
  });
  const content1 = results
    .map((item) => {
      return `
    <div class="autocomplete">
    <ul class="display-items">
    <li>${item.name}</li>
    </ul>
    </div>
    `;
    })
    .join("");

  searchWrapper.classList.add("show");
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  display.innerHTML = `<ul>${content1}</ul>`;
}

/* ADD TO CART FUNCTIONALITY */

// next we will need to grab all the cart and add a click event or better stil
// bind a click even on all the cart

let addToCartty = document.querySelectorAll(".carte");
for (let i = 0; i < addToCartty.length; i++) {
  addToCartty[i].addEventListener("click", addTocart);
}

const cart = [];

function addTocart(event) {
  document.getElementById("counter").textContent =
    Number(document.getElementById("counter").textContent) + 1;

  var button = event.target;
  var shopItem = button.parentElement.parentElement.parentElement;

  var title = shopItem.getElementsByClassName("cart-item-name")[0].textContent;
  var price = shopItem.getElementsByClassName("cart-item-price")[0].textContent;
  var image =
    shopItem.parentElement.getElementsByClassName("cart-item-image")[0].src;

  // first save this in an array of objects
  var newItem = { title, price, image };

  // first checking if the cart item has been added to cart already
  var nameCheck = cart.some((item) => item.title == newItem.title);

  if (nameCheck) {
    alert("Item already added to cart");
    document.getElementById("counter").textContent =
      Number(document.getElementById("counter").textContent) - 1;
    return;
  }

  // push to the cart array
  cart.push(newItem);

  // storing in the local storage
  setData("cartItems", cart);
}

/* UTILITY FUNCTIONS */

function setData(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

/* ADD TO CART FUNCTION DONE! */

// BUY BUTTON OVERLAY
document
  .getElementById("buy-now-overlay")
  .addEventListener("click", function buyNowOverlay() {
    window.location = "/pages/createaccount/createaccount.html";
  });

// BROKER LEARN
document.getElementById("broker-btn").addEventListener("click", () => {
  window.location = "/broker/brokerlogin$signup/brokersignup.html";
});
