class Client {
    constructor(url = 'http://localhost:3000') {
        this.baseURL = url;
    }

    get(id=null) {
        const endpoint = `${this.baseURL}/${id ? `/product/${id}` : '/products'}`;
        
        return fetch(endpoint)
            .then(res => res.json())
            .catch(err => {
                // manage error here
                return err;
            });
    }
}

export default Client;