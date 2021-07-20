class CartModel {
    constructor(list, shipping) {
        this._list = list;
        this._shipping = shipping;
    }

    get list() {
        return [].concat(this._list);
    }

    get shipping() {
        return this._shipping;
    }

    vat() {
        return this.totalPrice() * 0.2;
    }
    totalItens() {
        return this._list.reduce((accumulator, currentIndex) => accumulator + currentIndex.quantity , 0);
    }

    totalPrice() {
        return this._list.reduce((prevValue, currentValue) => {
            return prevValue + (currentValue.quantity * currentValue.product.price);
        }, 0)
    }

    totalGrand() {
        return this.totalPrice() + this.shipping;
    }

}

export default CartModel;