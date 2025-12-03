// Simple products script: handle buy clicks and store cart in localStorage
(function(){
  function $(sel){ return document.querySelector(sel); }
  function $all(sel){ return Array.from(document.querySelectorAll(sel)); }

  function getCart(){
    try{ return JSON.parse(localStorage.getItem('mw_cart')||'[]'); }catch(e){ return []; }
  }
  function saveCart(cart){ localStorage.setItem('mw_cart', JSON.stringify(cart)); }

  function addToCart(sku){
    const cart = getCart();
    cart.push({ sku: sku, addedAt: Date.now() });
    saveCart(cart);
  }

  function init(){
    // attach click handlers to buy buttons
    $all('.buy-btn').forEach(btn => {
      btn.addEventListener('click', (e)=>{
        const sku = btn.getAttribute('data-sku');
        // require login
        if (window.auth && typeof window.auth.isLoggedIn === 'function' && !window.auth.isLoggedIn()){
          // redirect to login
          window.location.hash = '#/login';
          return;
        }

        if (sku === 'enterprise'){
          showToast('Terima kasih! Silakan hubungi tim kami untuk penawaran Enterprise.');
          return;
        }

        addToCart(sku);
        showToast('Produk ditambahkan ke keranjang');
      });
    });
  }

  window.products = {
    init: init
  };
})();
