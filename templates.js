export const cartItemTemplate = (item,quantity)=>{
    const markup = /* html */ `
            <div class="cart-item">
              <div class="item-img-title flex">
                <div class="item-image-container">
                  <img
                    src="/assets/images/display-section/apple-watch.webp"
                    alt="Item Image"
                    class="item-image"
                  />
                </div>
                <p> ${item.name}
                </p>
              </div>
              <div class="item-details">
                <div>
                  <div class="quantity-controls">
                    <button class="quantity-button">-</button>
                    <span class="quantity">2</span>
                    <button class="quantity-button">+</button>
                  </div>
                  <div class="price-details">
                    <div class="total-price">${item.price*quantity}</div>
                    <div class="price-per-item">${item.price} each</div>
                  </div>
                </div>
              </div>
              <button class="btn btn--cta btn--cta--side btn--alert" id="removeFromCart" data-name="${item.name}">Remove</button>
            </div>`
    return markup;
}


export const prodTemplate = (item)=>{ 
    return /*template*/ `
            <div class="sub-cat__prod-card">
            <a href="/pages/product-page.html">
                <div class="sub-cat__prod-img">
                  <img
                    src="/assets/images/display-section/SM105729AP.webp"
                    alt=""
                  />
                </div>
                </a>
                <div class="sub-cat__prod-content">
                  <h3 style='color:black' class="sub-cat__prod-title">${item.name}</h3>
                  <div class="sub-cat__prod--stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <span>(${item.totalConsumers})</span>
                  </div>
                  <div class="flex sub-cat__prod-add-to-cart">
                    <button class="btn btn--cta--side btn--cta" id="addToCart" data-name="${item.name}">
                      Add to cart
                    </button>
                    <h4 class="sub-cat__prod--price">${item.price}</h4>
                  </div>
                </div>
              </div>
        `
}