import { Product, OrderList, Order, RequestParams } from './types.js';

if(!fetch) {
    const fetch = await import('node-fetch');
}

class Client {
    baseURL: string;
    constructor(url: string = 'http://localhost:3000') {
        this.baseURL = url;
    }

    request(url: string, params?: RequestParams) : Promise<any> {
        return fetch(url, params)
        .then(res => res.json())
        .catch(err => {
            // manage error here
            return err;
        });
    }

    getProducts(id = null) : Promise<Product[]> {
        const endpoint: string = `${this.baseURL}/${id ? `product/${id}` : 'products'}`;
        
        return this.request(endpoint);
    }

    getOrders() : Promise<Order[]> {
        const endpoint: string = `${this.baseURL}/orders`;
        
        return this.request(endpoint);
    }

    createOrder(order: OrderList) : Promise<Order> {
        const endpoint: string = `${this.baseURL}/order`;

        const params: RequestParams = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: { "Content-Type": "application/json" }
        };

        return this.request(endpoint, params);
    }
}

export default Client;