const addToCart = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  console.log(product, quantity);
  displayProduct(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
  displayProductFromLocalStorage(product, quantity);
};

const getStoredCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const savedProductToLocalStorage = (product, quantity) => {
  const cart = getStoredCart();
  cart[product] = quantity;
  console.log(cart);
  const cartStringified = JSON.stringify(cart);
  console.log(cartStringified);
  localStorage.setItem("cart", cartStringified);
};

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredCart();
  console.log(savedCart);

  for (const product in savedCart) {
    const quantity = savedCart[product];
    console.log(product, quantity);

    console.log(product);
    displayProduct(product, quantity);
  }
};

displayProductFromLocalStorage();
