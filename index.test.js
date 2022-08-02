import Client from './Client.js';

const client = new Client();

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

const createdOrder = await client.createOrder(newOrder);
console.log(createdOrder);