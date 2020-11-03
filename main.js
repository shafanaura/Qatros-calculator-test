// ambil element
const cart_items = document.getElementById("cart");

function addProduct(name, category) {
	return {
		name,
		category,
	};
}

var getProduct = addProduct("iPhone 11", "Handphone");
cart_items.innerHTML = `Product: ${getProduct.name}, Category: ${getProduct.category}`;
