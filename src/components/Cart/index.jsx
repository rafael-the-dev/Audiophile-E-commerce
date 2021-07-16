import { useEffect, useMemo, useRef } from "react";
import H2 from "../H2";
import SeeProductLink from "../SeeProductLink";
import ImageHelper from '../../js/helper/ImageHelper';
import './styles.css';

const Cart = ({ product, showForm }) => {
    console.log(product)
    const imageRef = useRef(null);
    const helper = useMemo(() => {
        return new ImageHelper(imageRef, product)
    }, [ product ]);

    useEffect(() => {
        helper.setImage(window.innerWidth); 

        window.addEventListener('resize', event => {
            helper.setImage(event.target.innerWidth);
        });

        return () => window.onresize = null;

    }, [ helper ]);

    return (
        <article className={`px-lg py-2-5 flex flex-column justify-between w-100
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
                            <form className="align-stretch flex justify-start w-100 cart__content-form">
                                <input
                                    placeholder="1"
                                    type="number"
                                    className="cart__content-input font-weight-7 text-center border-none 
                                    outline-none" 
                                />
                                <button
                                    type="button" 
                                    className="uppercase text-white bg-orange border-none outline-none
                                    cart__add-button">
                                    Add to cart
                                </button>
                            </form>
                        </div>
                    ) : ''
                }
            </div>
        </article>
    );
};

export default Cart;