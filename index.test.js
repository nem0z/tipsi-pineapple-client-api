import Client from './Client.js';

const client = new Client();
console.log(client);

const newOrder = [
    {
        "model": "piPhone 12",
        "desc": "iPhone 12 at a fair price"
    },
    {
        "model": "piPhone 12 Mini",
        "desc": "Small iPhone 12 at a fair price"
    }
];

const products = await client.getProducts();
console.log(products);