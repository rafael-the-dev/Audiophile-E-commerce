class CartModel {
    constructor(list) {
        this._list = list;
    }

    get list() {
        return [].concat(this._list);
    }

    totalItens() {
        return this._list.reduce((accumulator, currentIndex) => accumulator + currentIndex.quantity , 0);
    }

    totalPrice() {
        return this._list.reduce((prevValue, currentValue) => {
            return prevValue + (currentValue.quantity * currentValue.product.price);
        }, 0)
    }

}

export default CartModel;