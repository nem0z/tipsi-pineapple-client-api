class Client {
    constructor(url = 'http://localhost:3000') {
        this.baseURL = url;
        this.nodeFetch = null;
    }

    async getFetch() {
        if(fetch) return fetch;
        if(this.nodeFetch) return this.nodeFetch;

        this.nodeFetch = await import('node-fetch');
        return this.nodeFetch;
    }

    async request(url, params = {}) {
        const fetch = await this.getFetch()

        return fetch(url, params)
            .then(res => res.json())
            .catch(err => {
                // manage error here
                return err;
            });
    }

    getProducts(id = null) {
        const endpoint = `${this.baseURL}/${id ? `product/${id}` : 'products'}`;
        
        return this.request(endpoint);
    }

    getOrders() {
        const endpoint = `${this.baseURL}/orders`;
        
        return this.request(endpoint);
    }

    createOrder(order) {
        const endpoint = `${this.baseURL}/order`;

        const params = {
            "method": 'POST',
            "body": JSON.stringify(order),
            "headers": { "Content-Type": "application/json" }
        };

        return this.request(endpoint, params);
    }



}

export default Client;