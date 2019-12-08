//const Order = class {
class Order {
    set account(value) {
        this._account = value;
    }
    get account() {
        return this._account;
    }
    get orderid() {
        return this._orderid;
    }
    set orderid(value) {
        this._orderid = value;
    }

    constructor(orderid, account){
        this._orderid = orderid;
        this._account = account;
    }
};

export { Order };
