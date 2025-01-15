const table_body = document.getElementById("table-body");
const cart_totals = document.querySelector(".cart-totals");
getData().then((data) => {
  gobalItems = [...data];
  displayItems(data);
});

async function getData() {
  if (localStorage.getItem("cart")) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    const res = await fetch(
      "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889"
    );
    const data = await res.json();

    const requiredData = data.items.map((item) => {
      return {
        id: item.id,
        image: item.featured_image,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      };
    });
    localStorage.setItem("cart", JSON.stringify(requiredData));
    return requiredData;
  }
}
// Display table dynamically functionality
function displayItems(items = []) {
  let html = "";
  let totalPrice = 0;
  items.forEach((item) => {
    html += `<tr>
              <td>
                <div class="product-info">
                  <img src="${item.image.url}" alt="${
      item.image.alt
    }" class="product-image" height="40px"/>
                 
                </div>
              </td>
              <td> ${item.title}</td>
              <td>
              
                            <button onclick="updateQuantity('${item.id}', 'inc')">+</button>
                <span class="quantity">${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', 'dec')">-</button>
              </td>
              <td>${item.price}</td>
              <td>Rs. ${item.price * item.quantity}</td>
              <td><button id="delete" data-id = "${item.id}"><i class="fa-regular fa-trash-can"></i></button>
              </td>
         </tr>
        `;
    totalPrice += item.price * item.quantity;
  });
  table_body.innerHTML = html;

  //check out
  cart_totals.innerHTML = `
          <h3>Cart Totals</h3>
            <div class="totals">
                <p>Subtotal <span>Rs. ${totalPrice}</span></p>
                <p>Total <span>Rs. ${totalPrice}</span></p>
            </div>
            <div class="checkout-button">
                <button>Check Out</button>
            </div>
  `;
}

table_body.addEventListener("change", (e) => {
  if (e.target.id != "qty") return;
  const gobalItems = JSON.parse(localStorage.getItem("cart"));
  const updatedData = gobalItems.map((item) => {
    if (item.id == e.target.dataset.id) {
      return { ...item, quantity: e.target.value };
    }
  });
  displayItems(updatedData);
  localStorage.setItem("cart", JSON.stringify(updatedData));
});
//Delete Functionality

table_body.addEventListener("click", (e) => {
  if (e.target.id != "delete") return;
  const gobalItems = JSON.parse(localStorage.getItem("cart"));
  const updatedData = gobalItems.filter(
    (item) => item.id != e.target.dataset.id
  );

  if (updatedData.length === 0) {
    localStorage.removeItem("cart");
    displayItems();
  } else {
    displayItems(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  }
});
//
function updateQuantity(itemId, action) {
  const gobalItems = JSON.parse(localStorage.getItem("cart"));
  
  // Update quantity  Functionality
  const updatedData = gobalItems.map((item) => {
    if (item.id == itemId) {
      let newQuantity = item.quantity;
      if (action === 'inc') {
        newQuantity += 1; 
      } else if (action === 'dec' && item.quantity > 1) {
        newQuantity -= 1; 
      }
      return { ...item, quantity: newQuantity };
    }
    return item;
  });

  // Update the display and localStorage
  displayItems(updatedData);
  localStorage.setItem("cart", JSON.stringify(updatedData));
}
