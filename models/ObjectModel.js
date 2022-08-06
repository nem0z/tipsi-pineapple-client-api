class ObjectModel {
    constructor(client) {
        this.client = client;
        this._id = null;
    }

    commit() {
        if(this._id) return this.update();
        return this.create();
    }

    getItem() {
        const innerProperties = ['client'];
        const properties = Object.entries(this).filter(e => !innerProperties.includes(e.at(0)));
        return Object.fromEntries(properties);
    }

    create() {
        const { _id, ...item } = this.getItem();
        this.client.create(item);
    }

    read(showId = true) {
        return showId ? this.getItem() : ({ _id, ...item } = this.getItem()).item;
    }

    update() {
        const { _id, ...item } = this.getItem();
        return this.client.update(_id, item);
    }

    delete() {
        return this.client.delete(this._id);
    }
}