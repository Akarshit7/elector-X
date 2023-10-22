import "./wrapper.js";

import "./lib/easytimer/dist/easytimer.js";
import "./lib/purecounter/purecounter.js";
import "./izitoast.js";
import categoriesData from "/data/categories_data.js";
import subcategoriesData from "/data/sub_cat_data.js";
import mobilePhoneData from "/data/mobile_phone_data.js";
import { cartItemTemplate, prodTemplate } from "/templates.js";

const timer = new easytimer.Timer();
timer.start({
  precision: "seconds",
  countdown: true,
  startValues: { seconds: 30, hours: 23, minutes: 56 },
});

const hours_ele = document.getElementById("hours");
const minutes_ele = document.getElementById("minutes");
const seconds_ele = document.getElementById("seconds");

if (hours_ele && minutes_ele && seconds_ele) {
  timer.addEventListener("secondsUpdated", function (e) {
    hours_ele.innerHTML = timer.getTimeValues().hours.toString();
    minutes_ele.innerHTML = timer.getTimeValues().minutes.toString();
    seconds_ele.innerHTML = timer.getTimeValues().seconds.toString();
  });
}

const smallProdCards = document.querySelectorAll(".product__card--small");
const productBigImg = document.getElementById("productBig");

if (smallProdCards && productBigImg) {
  smallProdCards.forEach((item) => {
    item.addEventListener("click", function () {
      const img = item.querySelector("img");
      if (!img) {
        return;
      }
      smallProdCards.forEach((item) => {
        item.classList.remove("product__card--selected");
      });

      item.classList.add("product__card--selected");
      productBigImg.src = img.src;
    });
  });
}

const header = document.querySelector("header");
const headerLogo = header.querySelector(".header__logo");
const scrollThreshold = 20;
window.addEventListener("scroll", function (e) {
  if (this.window.scrollY > scrollThreshold) {
    header.style.top = "0";
    header.style.borderTopRightRadius = 0;
    header.style.borderTopLeftRadius = 0;
    header.style.padding = "0";
    headerLogo.style.width = "50px";
  }
  if (this.window.scrollY < scrollThreshold) {
    header.style.top = "20px";
    header.style.removeProperty("border-top-right-radius");
    header.style.removeProperty("border-top-left-radius");
    header.style.removeProperty("padding");
    headerLogo.style.width = "100px";
  }
});

if (document.querySelector("#orders")) {
  new PureCounter({
    selector: "#orders",

    start: 0,
    end: 500000,
    duration: 1,
    delay: 10,
    once: true,
    pulse: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    formater: "us-US",
    separator: ",",
  });
  new PureCounter({
    selector: "#customers",

    start: 0,
    end: 100000,
    duration: 1,
    delay: 10,
    once: true,
    pulse: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    formater: "us-US",
    separator: ",",
  });
  new PureCounter({
    selector: "#satisfaction",

    start: 0,
    end: 100,
    duration: 1,
    delay: 10,
    once: true,
    pulse: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    formater: "us-US",
    separator: false,
  });
  new PureCounter({
    selector: "#years",

    start: 0,
    end: 20,
    duration: 1,
    delay: 10,
    once: true,
    pulse: false,
    decimals: 0,
    legacy: false,
    filesizing: false,
    currency: false,
    formater: "us-US",
    separator: false,
  });
}

const object_markup = (objects) => {
  const markup = objects
    .map((item) => {
      const template = `
        <a href="/pages/sub-categories.html">
            <div class="top-categories__card">
            <div class="top-categories__image">
                <img
                src="/assets/images/display-section/apple-watch.webp"
                alt=""
                />
            </div>
            <h3 class="top-categories__title">${item.name}</h3>
            </div>
        </a>`;
      return template;
    })
    .join("");
  return markup;
};

const categoriesMarkup = () => {
  const objectMarkupString = categoriesData.categories
    .map((item) => {
      const markup = `<button class="btn btn--cta btn--label-title">
        ${item.name}
        </button>
        <div class="top-categories__container">
            ${object_markup(item.subcategories)}
        </div>`;
      return markup;
    })
    .join("");

  return objectMarkupString;
};

const categories = document.querySelector(".categories__sub-section");
if (categories) {
  categories.insertAdjacentHTML("afterbegin", categoriesMarkup());
}

const getSearchKeyword = () => {
  const urlParameter = new URLSearchParams(window.location.search);
  return urlParameter.get("keyword");
};

const searchKeywordPlace = document.querySelector(".search-page__keyword");
const searchSpan = searchKeywordPlace?.querySelector("span");

const path = window.location.pathname;
const is6kpage = window.location.pathname.includes("filter-6k-8k.html");
const is10kpage = window.location.pathname.includes("filter-10k-15k.html");

const subCategories = document.querySelector(".sub-cat__prod");

if (subCategories && !is6kpage && !is10kpage) {
  let data = subcategoriesData.products;

  const keyword = getSearchKeyword();

  if (keyword) {
    data = data.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    if (searchSpan) {
      searchSpan.innerHTML = keyword;
    }
  }
  const markup = data
    .map((item) => {
      return prodTemplate(item);
    })
    .join("");
  subCategories.insertAdjacentHTML("afterbegin", markup);
}

if (is6kpage) {
  const markup = mobilePhoneData.mobilePhones
    .filter((item) => item.price >= 6000 && item.price <= 8000)
    .map((item) => {
      return prodTemplate(item);
    })
    .join("");
  subCategories.insertAdjacentHTML("afterbegin", markup);
}

if (is10kpage) {
  const markup = mobilePhoneData.mobilePhones
    .filter((item) => item.price >= 10000 && item.price <= 15000)
    .map((item) => {
      return prodTemplate(item);
    })
    .join("");
  subCategories.insertAdjacentHTML("afterbegin", markup);
}

const getCart = () => JSON.parse(sessionStorage.getItem("cart"));

const shopping_cart = document.querySelector(".shopping-cart__title");

const renderCart = () => {
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  
  let markup = cart?.products?.map((item) => cartItemTemplate(item, 1));
//   console.log(markup);
  if (!markup || markup.length === 0) {
    markup = "<p>Your cart is empty</p>";
  }
  shopping_cart.insertAdjacentHTML(
    "afterend",
    typeof markup === "object" ? markup.join("") : markup
  );
};

if (shopping_cart) {
  renderCart();
}

const addToCartBtn = Array.from(document.querySelectorAll("#addToCart"));
if (addToCartBtn) {
  addToCartBtn.forEach((item) => {
    item.addEventListener("click", function () {
      if (sessionStorage.getItem("login") !== "true") {
        cartError();
        return;
      }
      let cart_object = subcategoriesData.products.filter(
        (x) => x.name === item.dataset.name
      );
      if (cart_object.length === 0) {
        cart_object = mobilePhoneData.mobilePhones.filter((y) => {
          y.name === item.dataset.name;
        });
      }

      let cart = getCart();
      if (!cart) {
        cart = {
          products: [],
        };
        cart.products.push(cart_object[0]);
      } else {
        cart.products.push(cart_object[0]);
      }
      sessionStorage.setItem("cart", JSON.stringify(cart));
      console.log(sessionStorage.getItem('cart'));
      addtoCartNotification();
    });
  });
}

const removeFromCartBtn = Array.from(
  document.querySelectorAll("#removeFromCart")
);
if (removeFromCartBtn) {
  removeFromCartBtn.forEach((item) => [
    item.addEventListener("click", function () {
      const cart = getCart();
      const newCart = cart.products.filter(
        (x) => x?.name != item.dataset?.name
      );
      cart.products = newCart;
      sessionStorage.setItem("cart", JSON.stringify(cart));
      removeFromCartNotification();
      setTimeout(function () {
        location.reload();
      }, 600);
      // renderCart();
    }),
  ]);
}

const searchInput = document.getElementById("searchKeyword");
searchInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    window.location.href = `${location.origin}/pages/search.html?keyword=${e.target.value}`;
  }
});

function addtoCartNotification() {
  iziToast.success({
    title: "OK",
    message: "Your Item has been added to the cart",
    timeout: 2000,
    position: "bottomRight",
  });
}

function removeFromCartNotification() {
  iziToast.error({
    title: "Done",
    message: "Your selected item has been removed",
    timeout: 500,
    position: "bottomRight",
  });
}

function cartError() {
  iziToast.error({
    title: "Error",
    message: "Login to add products to cart",
    timeout: 1500,
    position: "bottomRight",
  });
}
