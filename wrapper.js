const header = `<header class="header max-container">
<a href="/">
  <img
    class="header__logo"
    src="/assets/images/site-icon/site-icon.png"
    alt="website logo"
  />
</a>
<nav class="header__nav">
  <ul class="nav__list">
    <li class="nav__list-item"><a href="/">Home</a></li>
    <li class="nav__list-item"><a href="/pages/categories.html">Categories</a></li>
    <li class="nav__list-item">
      <a href="/pages/about-us.html">About Us</a>
    </li>
    <li class="nav__list-item">
      <a href="/pages/login-signup.html">Login/Sign Up</a>
    </li>
  </ul>
</nav>
<div class="header__profile">
  <div class="header__search">
    <input placeholder="Search here...." ="search__input" type="text" id="searchKeyword" />
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <i class="fa-solid fa-bell"></i>
  <a href="/pages/cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
  <a href="/pages/user-profile"><i class="nav__img-icon fa-regular fa-user"></i></a>
  <a class="nav__img hidden" href="/pages/user-profile/">
          <img src="/assets/images/trusted-vendors-photos/avtar-1.jpg" width="30" height="30" style="border-radius: 50%;">
  </a>
  <span class="nav__logout hidden" style='cursor: pointer;'>Logout</span>
</div>
</header>`

const footer = `<footer class="footer max-container">
<div class="footer__container">
  <h2 class="footer__heading">JOIN ELECTRO-X</h2>
  <p class="footer__desc">
    Subscribe to our newsletter today and let zonix be your ultimate
    destination for staying informed, making informed purchase decisions,
    and unlocking the full potential of the tech world.
  </p>
  <div class="footer-subscribe__container">
    <input type="text" placeholder="Enter e-mail address" />
    <button class="btn btn--cta btn--label-title btn--footer-label">
      Subscribe
    </button>
  </div>
  <div class="footer-links__container">
    <div class="footer__icon-container">
      <div>
        <img src="/assets/images/site-icon/site-icon.png" alt="" />
      </div>
      <div class="icon--social-media">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
    <div class="list__container">
      <label class="list__heading">Need Help</label>
      <ul class="list__content">
        <li>Help Center</li>
        <li>Contact Us</li>
        <li>Report products</li>
        <li>Fund return policy</li>
      </ul>
    </div>
    <div class="list__container">
      <label class="list__heading">About Electo-X</label>
      <ul class="list__content">
        <li>About Us</li>
        <li>Careers</li>
        <li>Discount sales</li>
      </ul>
    </div>
    <div><img src="/assets/images/footer/playsotre_app_store.png" alt="" width="250"></div>
  </div>
</div>
</footer>`


const main_el= document.querySelector('main');
const isThereHeader = document.querySelector('header');

if(main_el && !isThereHeader){
    main_el.insertAdjacentHTML("beforebegin",header);
    // main_el.insertAdjacentHTML("afterend",footer);
}



if(sessionStorage.getItem('login')==='true'){
  const userIcon = document.querySelector('.nav__img-icon');
  userIcon.classList.toggle('hidden');
  const userAvatarImg = document.querySelector('.nav__img');
  userAvatarImg.classList.toggle('hidden');
  const logoutBtn = document.querySelector('.nav__logout');
  logoutBtn.classList.toggle('hidden');
  logoutBtn.addEventListener('click',function(e){
    sessionStorage.removeItem('login');
    location.replace(location.origin);
  });
}






const addAlertCss = ()=>{

var link = document.createElement( "link" );
link.href = "/lib/izitoast/iziToast.min.css"
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );
}
addAlertCss();