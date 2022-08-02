type Product = {
    name: string,
    desc: string,
    price: Number,
    _id: string
};

type OrderList = Array<Product|string>;

type Order = {
    order: OrderList,
    date: Date,
    price: Number,
}

type RequestParams = {
    method: string;
    body: string;
    headers: {
        "Content-Type": string;
    };
}

export { Product, OrderList, Order, RequestParams };