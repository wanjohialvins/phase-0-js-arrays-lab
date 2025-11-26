// Creating the Product Inventory Array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product
function logFirstProduct() {
    console.log(products[0]);
}

// Function to update a product name
function updateProductName(position, newName) {
    if (position >= 0 && position < products.length) {
        products[position] = newName;
    } else {
        console.log("Invalid product position");
    }
}

// Function to remove the last product
function removeLastProduct() {
    products.pop();
}

// Function to add a new product
function addProduct(newProduct) {
    products.push(newProduct);
}


module.exports = {
  logFirstProduct: logFirstProduct,
  addProduct: addProduct,
  updateProductName: updateProductName,
  removeLastProduct: removeLastProduct,
  products: products
};
