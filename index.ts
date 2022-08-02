import { Product, OrderList, Order } from './types.js';
import Client from './Client.js';

const client = new Client();

const products : Product[] = await client.getProducts();
const newOrder: OrderList = [products[0], products[2]]

const createdOrder: Order = await client.createOrder(newOrder);
console.log(createdOrder);