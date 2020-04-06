//const Order = class {
class Order {
    get product() {
        return this._product;
    }

    set product(value) {
        this._product = value;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }
    set address(value) {
        this._address = value;
    }
    get address() {
        return this._address;
    }
    get orderid() {
        return this._orderid;
    }
    set orderid(value) {
        this._orderid = value;
    }

    constructor(orderid, address, product, amount){
        this._orderid = orderid;
        this._address = address;
        this._product = product;
        this._amount = amount;
    }
}

export { Order };
