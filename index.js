import Client from './Client.js';
const client = new Client();
const products = await client.getProducts();
const newOrder = [products[0], products[2]];
const createdOrder = await client.createOrder(newOrder);
console.log(createdOrder);
