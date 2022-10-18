// const prevBtn = document.querySelectorAll(".btn-prev");
// const nextBtn = document.querySelectorAll(".btn-next");
const formStep = document.querySelectorAll(".shipping-form");
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");

const shippingBtn = document.querySelector(".btn-shipping");
const paymentBtn = document.querySelector(".btn-payment");

// usersDetails
let username = document.querySelector(".username");
let phone = document.querySelector(".userphone");
let state = document.querySelector(".userstate");
let lga = document.querySelector(".userlga");
let address = document.querySelector(".useradd");

const userinput = JSON.parse(localStorage.getItem("userinput")) || [];
const paymentinput = JSON.parse(localStorage.getItem("paymentinput")) || [];

let formStepsNum = 0;
shippingBtn.addEventListener("click", (e) => {
    e.preventDefault();

    usersDetails = {
        username: username.value,
        phone: phone.value,
        state: state.value,
        lga: lga.value,
        address: address.value,
    };

    if (usersDetails.phone == "") {
        const errorElement = document.querySelector(".phoneErr");

        // adding the class of error message to it
        errorElement.className = "errorMessage";

        // next we add the text
        errorElement.textContent = "Phone number pattern 123-456-7890";
        alert("Phone number cannot be empty");
        return false;
    }

    userinput.push(usersDetails);
    localStorage.setItem("userinput", JSON.stringify(userinput));
    if (!(formStepsNum > progressSteps)) {
        formStepsNum += 1;
        updateFormSteps();
        upgateProgressBar();
        // localStorage.setItem("userdetails", JSON.stringify(usersDetails));
    }
    console.log("I was clicked");
});

// Payment Details
let nameOncard = document.querySelector(".name-on-card");
let cardNumber = document.querySelector(".card-number");
let expiryDate = document.querySelectorAll(".expiry-date");
let CVV = document.querySelector(".cvv");

paymentBtn.addEventListener("click", (e) => {
    e.preventDefault();
    paymentdetails = {
        nameOncard: nameOncard.value,
        cardNumber: cardNumber.value,
        expiryDate: expiryDate.values,
        CVV: CVV.value,
    };
    paymentinput.push(paymentdetails);
    localStorage.setItem("paymentinput", JSON.stringify(paymentinput));
    if (!(formStepsNum > progressSteps)) {
        formStepsNum += 1;
        updateFormSteps();
        upgateProgressBar();
        // localStorage.setItem("userdetails", JSON.stringify(usersDetails));
    }
});

// nextBtn.forEach((btn) => {
//     // Validate Phone number

//     btn.addEventListener("click", (e) => {
//         e.preventDefault();
//         const usersDetails = {
//             username,
//             phone,
//             state,
//             lga,
//             address,
//         };

//         userinput.push(usersDetails);
//         localStorage.setItem("userinput", JSON.stringify(userinput));
//         if (!(formStepsNum > progressSteps)) {
//             formStepsNum += 1;
//             updateFormSteps();
//             upgateProgressBar();
//             // localStorage.setItem("userdetails", JSON.stringify(usersDetails));
//         }
//     });
// });

// prevBtn.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault()

//         if (formStepsNum == 0) {
//             window.location = "/pages/cart/cart.html"
//         }
//         else{
//             formStepsNum -= 1;
//         }
//         updateFormSteps();
//         upgateProgressBar();

//     })
// })
// prevBtn.forEach((btn) => {
//     btn.addEventListener("click", prev);
// });
// progressSteps.forEach((prog, idx) => {
//     prog.addEventListener("click", () => {
//         if (idx < formStepsNum) {
//             formStepsNum -= 1;
//             updateFormSteps();
//             upgateProgressBar();
//         }
//     });
// });

// function prev(e) {
//     e.preventDefault();
//     if (formStepsNum < progressSteps) {
//         return;
//     } else {
//         formStepsNum -= 1;
//         updateFormSteps();
//         upgateProgressBar();
//     }
// }

function updateFormSteps() {
    formStep.forEach((step) => {
        step.classList.contains("shipping-form-active") &&
            step.classList.remove("shipping-form-active");
    });
    formStep[formStepsNum].classList.add("shipping-form-active");
}

function upgateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });
    const progressActive = document.querySelectorAll(".progress-step-active");
    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

const caret = document.querySelector(".buyers-caret");

caret.addEventListener("click", (element) => {
    const listContainer = document.querySelector(".buyers-list-container");
    listContainer.classList.toggle("menu-open");
    caret.classList.toggle("caret-rotate");
});

// Validating the shipping form

// console.log(usersDetails);

displayCartSummary = () => {
    const cartContainer = document.querySelector(".cart-review");
    if (localStorage.getItem("cartItems") == undefined) {} else {
        const cartItems = JSON.parse(localStorage.getItem("cartItems"));
        var productReview = document.createElement("div");
        productReview.classList.add("product-review");

        console.log(cartItems);
        cartItems.forEach((item) => {
            var productReviewContents = `
                <div class="product-review">
                <div class="product-review-container">
                    <div class="product-review-img">
                        <img src="${item.image}" alt="" />
                    </div>
                    <div>
                        <h4 class="product-review-text">${item.title}</h4>
                        <p>Special Breed</p>
                    </div>
                </div>
                <div class="product-review-price">#${item.price}</div>
            </div>
            `;
            productReview.innerHTML = productReviewContents;
            cartContainer.append(productReview);
        });
    }

    const usercontainer = document.querySelector(".user-review");
    if (localStorage.getItem("userinput") == undefined) {} else {
        const users = JSON.parse(localStorage.getItem("userinput"));
        var useradd = document.createElement("div");
        users.forEach((user) => {
            var eachuser = `
                 <h4 class="user-review-name">${user.username}</h4>
                    <h4 class="user-review-number">${user.phone}</h4>
                    <h4 class="user-review-State">${user.state}, State</h4>
                    <h4 class="user-review-lga">${user.lga} LGA</h4>
                    <h4 class="user-review-des">
                        Kindly check our return policy page for more information on how to resolve issues concerning bad goods
                    </h4>

            `;
            useradd.innerHTML = eachuser;
            usercontainer.append(useradd);
        });
    }
};
displayCartSummary();

// Validate input box

// function validatePassword(phone) {
//     /* This function will return true if the password
//                       is correctly validated
//                       */
//     const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

//     // next we trim for whitespaces
//     if (!phoneRegex.test(phone.value.trim())) {
//         const errorElement = element.parentNode.querySelector(".phoneErr");

//         // adding the class of error message to it
//         errorElement.className = "errorMessage";

//         // next we add the text
//         errorElement.textContent = errorMessage;
//         return false;
//     }

//     return true;
// }