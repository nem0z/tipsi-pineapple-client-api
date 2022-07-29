import Client from 'Client';

const client = new Client();

const products = await client.get();
console.log(products);