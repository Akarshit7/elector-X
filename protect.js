
const protectedRoutes = [
    '/pages/user-profile/',
    '/pages/user-profile/new-orders.html',
    '/pages/checkout.html',
    '/pages/cart.html',
    '/pages/user-profile/whishlist.html',
    '/pages/user-profile/profile-settings.html',
    '/pages/user-profile/transactions.html',
    '/pages/user-profile/orders-history.html',
    '/pages/user-profile/logout.html'
    //all others in the same format and add the protect script in the head of the html files
]





if(protectedRoutes.includes(location.pathname) && sessionStorage.getItem('login')!=='true'){
    // location.replace(`${location.origin}/pages/login-signup.html`);
};