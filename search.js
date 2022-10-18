const products = [
    {
      name: "Beans",
      desc: "Best beans from sokoto",
      price: 20000,
      image: "/assets/beans.jpg",
    },
    {
      name: "Rice",
      desc: "Nigerian made rice",
      price: 30000,
      image: "/assets/rice-bag.png",
    },
    {
      name: " Garri",
      desc: "Quality",
      price: 20000,
      image: "/assets/garri.jpg",
    },
    {
      name: "Palm Oil",
      desc: "Best Red oil",
      price: 15000,
      image: "/assets/red oil.jpg",
    },
    {
      name: "Yam",
      desc: "Big Yams",
      price: 3000,
      image: "/assets/yam.jpg",
    },
    {
      name: "Turkey",
      desc: "Big Turkey",
      price: 8000,
      image: "/assets/turkey.jpg",
    },
    {
      name: "Broillers",
      desc: "Foriegn Birds",
      price: 5000,
      image: "/assets/broilers.jpg",
    },
    {
      name: "Cow",
      desc: "Foriegn Birds",
      price: 5000,
      image: "/assets/cows.png",
    },
    {
      name: "Cocoa",
      desc: "Best Quality Cocoa",
      price: 20000,
      image: "/assets/cocoa.jpg",
    },
    {
        name: "Cockrel",
        desc: "Home trained chicken",
        price: 5000,
        image: "/assets/chickens.png",
      },
      {
        name: "Broilers",
        desc: "3 months broilers",
        price: 700,
        image: "/assets/broilers.jpg",
      },
      {
        name: "Chicks",
        desc: "Day old chilcks of all sizes",
        price: 20000,
        image: "/assets/day-old.jpg",
      },
  ];
  
  // LIVESTOCKS
  
  const searchInput = document.getElementById('input');
  // const button = document.querySelector('#searchbutton');
  const display = document.querySelector('.display-items');
   const searchWrapper = document.querySelector('.input-search');
  const resultsWrapper = document.querySelector('.searchresults');
  const list = document.getElementById('searchlist');
  const suggBox = document.querySelector('.autocomplete')
  let results = [];
  
  searchInput.addEventListener('keyup', (e) => {
   const searchString = e.target.value;
    let input = searchInput.value;
    if (input.length) {
      results = products.filter((item) => {
        return item.name.toLowerCase().includes(searchString) && item.name.toLowerCase().includes(input);
      });
    }
    console.log(results)
    renderResults(results);
    

  });


 document.addEventListener('click' , (e) => {
  if(e.target.closest('.searchresults')){
    return resultsWrapper.classList.add("removeresults");
  }
  else if (e.target.closest('.autocomplete')){
    return suggBox.classList.add("removeresults");
  }
 })
  function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
    const content = results
          .map((item) => {
            return  `<div class="searchcard">
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
          `;;
          })
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
    .join('');
          
  
    searchWrapper.classList.add('show');
     resultsWrapper.innerHTML = `<ul>${content}</ul>`;
    display.innerHTML = `<ul>${content1}</ul>`

  }





const togglebtn = document.querySelector(".nav-width ul");
// const nav = document.querySelector(".nav");
const menubtn = document.querySelector(".menu_btn i");



menubtn.addEventListener("click", function() {
    togglebtn.classList.toggle("active")
    menubtn.classList.toggle("active")
})