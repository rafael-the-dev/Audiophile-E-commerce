import { useState } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import ImageHelper from '../../js/helper/ImageHelper';
import { removeItem, updateItem } from '../../js/store/actions';
import H3 from '../H3';
import './styles.css';

const CartItem = ({ cartItem }) => {
    const imageRef = useRef(null);
    const inputRef = useRef(null);
    const [ isInValidQuantity, setIsInValidQuantity ] = useState(false);
    const [ value, setValue ] = useState(0);

    const dispatch = useDispatch();
    const helper = useMemo(() => {
        return new ImageHelper(imageRef)
    }, [ ]);

    useEffect(() => {
        helper.addImage(cartItem.product.image.mobile);
    }, [ helper, cartItem ]);

    useEffect(() => setValue(v => cartItem.quantity), [ cartItem ]);

    const setProduct = (quantity) => {
        dispatch(updateItem({ ...cartItem,  quantity}));
        setValue(v => quantity)
    };

    const incrementButtonHandler = () => {
        if(!isInValidQuantity) {
           setProduct( value + 1);
        } 
    };

    const decrementButtonHandler = () => {
        if(!isInValidQuantity) {
            if((value - 1) === 0) {
                dispatch(removeItem(cartItem));
            } else {
                setProduct( value - 1)
            }
            
        } 
    };

    const onChangeHandler = () => {
        console.log("Value changed  ", inputRef.current.value)
        if(inputRef.current.value === "" || isNaN(parseInt(inputRef.current.value))) {
            setIsInValidQuantity(b => true);
            inputRef.current.classList.add('error-border');
        } else {
            if(parseInt(inputRef.current.value) === 0) {
                dispatch(removeItem(cartItem));
            }
            else {
                setIsInValidQuantity(b => false);
                inputRef.current.classList.remove('error-border');
                //setProduct( parseInt(inputRef.current.value))
            }
        }
    };

    return (
        <article className="align-center flex justify-between w-100 cart-item">
            <figure className="cart-item__image-container">
                <img src="" ref={imageRef} className="d-block h-100 w-100" alt=""/>
            </figure>
            <div className="">
                <H3 customClass="cart-item__name" text={ cartItem.product.slug.replace(/(-[a-z]+)+/i, "") } />
                <p  className="cart-item__price">$ { cartItem.product.price }/{value}</p>
            </div>
            <form
                onSubmit={e => e.preventDefault()} 
                className="align-center flex justify-between w-100 cart-item__form">
                <button
                    type="button"
                    className="border-none outline-none bg-transparent cart-item__decrement" 
                    onClick={decrementButtonHandler}>-</button>
                <input
                    type="number"
                    min="0"
                    value={value}
                    ref={inputRef}
                    className="border-none font-weight-7 text-center outline-none bg-transparent cart-item__input" 
                    onChange={onChangeHandler}
                />
                <button 
                    type="button"
                    className="border-none outline-none bg-transparent cart-item__increment" 
                    onClick={incrementButtonHandler}>+</button>
            </form>
        </article>
    );
}; 

export default CartItem;