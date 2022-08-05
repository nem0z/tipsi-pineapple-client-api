import Client from './Client.js';

const client = new Client();

const products = await client.getProducts();
console.log(products);

const newOrder = [products[0], products[products.length - 1]];
const createdOrder = await client.createOrder(newOrder);
console.log(createdOrder);