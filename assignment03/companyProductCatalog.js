// Task: Create a program to represent a product catalog using an array and perform basic queries.
let inventory = []; // 1. Define an array named inventory to store product information.
/* Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.*/
let product1 = {
    name: "Apple Pencil",
    model: "2nd generation",
    cost: 2999,
    quantity: 999,
};
let product2 = {
    name: "Changan Alsvin",
    model: "F202",
    cost: 3000000,
    quantity: 4500,
};
let product3 = {
    name: "Nokia",
    model: 3310,
    cost: 3999,
    quantity: 399,
};
// Add these product objects to the inventory array using an appropriate array method.
inventory = [product1, product2, product3];
/* Access and log the quantity property of a specific product (e.g., third product) in the
inventory array. */
console.log(product3.quantity);
/*Explore adding and accessing more elements within the inventory array to understand
how to manage product data.*/
let product4 = {
    name: "HP laptop",
    model: "8th generation",
    cost: 6499,
    quantity: 399,
};
inventory.push(product4);
console.log(inventory);
export {};
