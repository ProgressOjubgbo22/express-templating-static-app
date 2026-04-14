const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 }
];

const cart = [];

function renderProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById('cart');
  cartEl.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartEl.appendChild(li);
  });
}

renderProducts();
