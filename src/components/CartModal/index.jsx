import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartModel from '../../js/models/CartModel';
import { removeAll } from '../../js/store/actions';
import { selectCart } from '../../js/store/selectors';
import CartItem from '../CartItem';
import H2 from '../H2';
import './styles.css';

const CartModal = ({ modalRef }) => {
    const cart = useSelector(selectCart);

    const cartModel = useMemo(() => {
        return new CartModel(cart);
    }, [ cart ]);

    const dispatch = useDispatch();

    return (
        <div role="dialog" ref={modalRef} className="align-stretch radius-default py-2 px-5 d-none flex-column
            absolute cart-modal">
            <header className="align-center flex justify-between w-100 cart-modal__header">
                <H2 customClass="uppercase cart-modal__title" text={`cart(${cartModel.totalItens()})`} />
                <button
                    onClick={() => dispatch(removeAll())}
                    className="border-none outline-none opacity-8 bg-transparent cart-modal__remove-all">
                    Remove all
                </button>
            </header>
            <div className="">
                {
                    cartModel.list.map((item, index) => <CartItem key={ index } cartItem={ item}/>)
                }
            </div>
            <footer className="align-stretch flex flex-column py-2 cart-modal__footer">
                <h3 className="align-stretch flex justify-between uppercase w-100 cart-modal__total-price">
                    <span>Total</span>
                    <span className="font-weight-7">$ { cartModel.totalPrice() }</span>
                </h3>
                <Link to="/checkout" className="text-center decoration-none uppercase  bg-orange text-white 
                    w-100 py-1 cart-modal__checkout">
                    checkout
                </Link>
            </footer>
        </div>
    );
};

export default CartModal;