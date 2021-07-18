class CartItem {
    constructor(item, quantity) {
        this._item = item;
        this._quantity = quantity;
    }

    get quantity() {
        return this._quantity;
    }

    get item() {
        return this._item;
    }

    totalPrice() {
        return this.quantity * this.item.price;
    }
}

export default CartItem;