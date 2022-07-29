import Client from './Client.js';

const client = new Client();

const products = await client.get();
console.log(products);