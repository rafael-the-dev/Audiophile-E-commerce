import { useEffect, useMemo, useRef, useState } from "react";
import H2 from "../H2";
import SeeProductLink from "../SeeProductLink";
import ImageHelper from '../../js/helper/ImageHelper';
import './styles.css';
import { useDispatch } from "react-redux";
import { addItem } from "../../js/store/actions";

const Cart = ({ product, showForm }) => {
    const imageRef = useRef(null);
    const inputRef = useRef(null);
    const errorMessageRef = useRef(null);
    const dispatch = useDispatch();
    const [ isInValidQuantity, setIsInValidQuantity ] = useState(false);
    const [ value, setValue ] = useState(1);

    const helper = useMemo(() => {
        return new ImageHelper(imageRef, product)
    }, [ product ]);

    useEffect(() => {
        helper.setImage(window.innerWidth); 

        window.addEventListener('resize', event => {
            helper.setImage(event.target.innerWidth);
        });

        return () => {
            window.onresize = null;
        }

    }, [ helper ]);

    const clickHandler = () => {
        if(!isInValidQuantity) {
            const quantity = parseInt(inputRef.current.value);
            dispatch(addItem({ quantity, product }));
        } 
    };

    const onChangeHandler = () => {
        if(inputRef.current.value === "" || isNaN(parseInt(inputRef.current.value))) {
            setIsInValidQuantity(b => true);
            errorMessageRef.current.classList.add('d-block');
            inputRef.current.classList.add('error-border');
        } else {
            setValue(v => parseInt(inputRef.current.value) )
            setIsInValidQuantity(b => false);
            errorMessageRef.current.classList.remove('d-block');
            inputRef.current.classList.remove('error-border');
        }
    };

    return (
        <article className={`px-lg px-xl py-2-5 flex flex-column justify-between w-100
            radius-default cart ${showForm ? 'align-start' : 'align-center'}`}>
            <figure className="w-100 radius-default cart__image">
                <img
                    ref={imageRef}
                    src=""
                    alt="ZX9 SPEAKER"
                    className="d-block radius-default height-100 w-100"
                />
            </figure>
            <div className={`flex flex-column justify-between px-5 w-100
                align-start-md cart__content ${showForm ? 'align-start' : 'align-center'}`}>
                <H2
                    customClass={`cart__content-name text-black ${showForm ? 'text-left' : 'text-center'} ${ product.new ? 'cart--nwe-product' : ''}`}
                    text={ product.name }
                />
                <p className={`text-black opacity-8 cart__content-description
                    ${showForm ? 'text-left' : 'text-center'}`}>
                    { product.description }
                </p>
                {
                    showForm ? '' : (
                        <SeeProductLink
                            url={ `./${product.category}/${product.id}`}
                            customClass=""
                        />
                    )
                }
                {
                    showForm ? (
                        <div className="cart__division">
                            <h3 className="text-black font-weight-7 cart__price">$ { product.price }</h3>
                            <form className="align-start flex flex-column justify-start w-100 
                                cart__content-form">
                                <label
                                    ref={errorMessageRef} 
                                    className={`text-left ${isInValidQuantity ? 'error-message' : 'd-none'}`} 
                                    htmlFor={inputRef.current}>
                                    Insert the number of itens
                                </label>
                                <div className="align-stretch flex justify-start w-100">
                                    <input
                                        ref={inputRef}
                                        placeholder="1"
                                        value={value}
                                        min="1"
                                        type="number"
                                        className="cart__content-input font-weight-7 text-center border-none 
                                        outline-none" 
                                        onChange={onChangeHandler}
                                    />
                                    <button
                                        type="button" 
                                        className="uppercase text-white bg-orange border-none outline-none
                                        cart__add-button"
                                        onClick={clickHandler}>
                                        Add to cart
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : ''
                }
            </div>
        </article>
    );
};

export default Cart;