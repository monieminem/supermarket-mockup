const products = [
  { id: 1, name: "Fresh Bananas", price: 120, unit: "per kg", emoji: "\uD83C\uDF4C", badge: "Popular" },
  { id: 2, name: "Organic Avocados", price: 80, unit: "each", emoji: "\uD83E\uDD51", badge: null },
  { id: 3, name: "Whole Milk 1L", price: 95, unit: "pack", emoji: "\uD83E\uDD5B", badge: "Fresh" },
  { id: 4, name: "Brown Bread", price: 70, unit: "loaf", emoji: "\uD83C\uDF5E", badge: null },
  { id: 5, name: "Free Range Eggs", price: 350, unit: "tray", emoji: "\uD83E\uDD5A", badge: "Best Seller" },
  { id: 6, name: "Tomatoes", price: 100, unit: "per kg", emoji: "\uD83C\uDF45", badge: null },
  { id: 7, name: "Chicken Breast", price: 650, unit: "per kg", emoji: "\uD83C\uDF57", badge: "Promo" },
  { id: 8, name: "Orange Juice", price: 180, unit: "1L", emoji: "\uD83C\uDF4A", badge: null },
  { id: 9, name: "Irish Potatoes", price: 90, unit: "per kg", emoji: "\uD83E\uDD54", badge: null },
  { id: 10, name: "Cooking Oil 2L", price: 480, unit: "bottle", emoji: "\uD83E\uDDC2", badge: "Deal" },
];

let cartCount = 0;

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = products.map(p => `
    <div class="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col">
      <div class="bg-gray-50 h-36 flex items-center justify-center text-5xl relative">
        ${p.emoji}
        ${p.badge ? `<span class="absolute top-2 left-2 bg-brand-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">${p.badge}</span>` : ""}
      </div>
      <div class="p-4 flex flex-col flex-1">
        <h3 class="font-medium text-sm mb-1 line-clamp-2">${p.name}</h3>
        <p class="text-xs text-gray-500 mb-3">${p.unit}</p>
        <div class="mt-auto flex items-center justify-between gap-2">
          <span class="font-bold text-brand-700">KSh ${p.price}</span>
          <button onclick="addToCart(${p.id})" 
                  class="add-btn bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg">
            Add
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function addToCart(id) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  // Small visual feedback
  const btn = event.target;
  const original = btn.textContent;
  btn.textContent = "Added";
  btn.classList.add("bg-green-600");
  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove("bg-green-600");
  }, 800);
}

document.addEventListener("DOMContentLoaded", renderProducts);
