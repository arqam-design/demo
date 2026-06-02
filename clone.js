const products = [
  { id: 1, title: 'Echo Dot (5th Gen)', price: 39.99, image: 'https://tse1.mm.bing.net/th/id/OIP.I6Tp28-acYymZ6r_Bs7NigHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 2, title: 'Fire TV Stick 4K', price: 49.99, image: 'https://tse4.mm.bing.net/th/id/OIP.cYGsVD_dvRaXln0P5baIUgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 3, title: 'Kindle Paperwhite', price: 129.99, image: 'https://m.media-amazon.com/images/I/71FWKtSIYUL._AC_SL1500_.jpg' },
  { id: 4, title: 'Apple AirPods Pro', price: 199.99, image: 'https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SX679_.jpg' },
  { id: 5, title: 'Logitech Wireless Mouse', price: 24.99, image: 'https://m.media-amazon.com/images/I/61v1eEAWXYL._AC_.jpg' },
  { id: 6, title: 'Samsung 65" 4K UHD TV', price: 599.99, image: 'https://tse3.mm.bing.net/th/id/OIP.ucpn-9sFEJXWM8pS9Z2h6gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' }
];

const productsEl = document.getElementById('products');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function render(items) {
  productsEl.innerHTML = items.map(p => `
    <article class="product-card">
      <img src="${p.image}" alt="${p.title}" />
      <div class="title">${p.title}</div>
      <div class="price">$${p.price.toFixed(2)}</div>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </article>
  `).join('');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  alert(`${product.title} added to cart.`);
}

function search() {
  const query = searchInput.value.trim().toLowerCase();
  render(query ? products.filter(p => p.title.toLowerCase().includes(query)) : products);
}

searchBtn.addEventListener('click', search);
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') search(); });

render(products);
