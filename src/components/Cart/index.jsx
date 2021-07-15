import { useCallback, useEffect, useRef } from "react";
import H2 from "../H2";
import SeeProductLink from "../SeeProductLink";
import './styles.css';

const Cart = ({ product, showForm }) => {
    console.log(product)
    const imageRef = useRef(null);

    const getImage = url => {
        import('../../assets/images/' + url)
            .then(image => imageRef.current.src = image.default)
            .catch(console.log); 
    };

    const setImage = useCallback(width => {
        if(width >= 992) {
            getImage(product.image.desktop)
        } else if(width >= 501) {
            getImage(product.image.mobile)
        } else {
            getImage(product.image.mobile)
        }
    }, [ product ]);

    useEffect(() => {
        setImage(window.innerWidth); 

        window.addEventListener('resize', event => {
            setImage(event.target.innerWidth);
        });

        return () => window.onresize = null;

    }, [ setImage ]);

    return (
        <article className={`px-lg flex flex-column justify-between w-100
            radius-default cart ${showForm ? 'align-start' : 'align-center'}`}>
            <figure className="w-100 radius-default cart__image">
                <img
                    ref={imageRef}
                    src=""
                    alt="ZX9 SPEAKER"
                    className="d-block radius-default height-100 w-100"
                />
            </figure>
            <div className="align-center flex flex-column justify-between px-5 w-100
                align-start-md cart__content">
                <H2
                    customClass={`cart__content-name text-black text-center ${ product.new ? 'cart--nwe-product' : ''}`}
                    text={ product.name }
                />
                <p className="text-black text-center cart__content-description">
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
                            <h3 className="text-black cart__price">$ { product.price }</h3>
                            <form className="align-stretch flex justify-start w-100 cart__content-form">
                                <input
                                    placeholder="1"
                                    type="number"
                                    className="cart__content-input text-center border-none outline-none" 
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