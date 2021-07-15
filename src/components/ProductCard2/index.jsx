import H3 from '../H3';
import SeeProductLink from '../SeeProductLink';
import './styles.css';
import { useCallback, useEffect, useRef } from 'react';

const ProductCard2 = ({ cart }) => {
    const imageRef = useRef(null);

    const getImage = url => {
        import('../../assets/images/' + url)
            .then(image => imageRef.current.src = image.default)
            .catch(console.log); 
    };

    const setImage = useCallback(width => {
        if(width >= 992) {
            getImage(cart.image.desktop)
        } else if(width >= 501) {
            getImage(cart.image.mobile)
        } else {
            getImage(cart.image.mobile)
        }
    }, [ cart ]);

    useEffect(() => {
        setImage(window.innerWidth); 

        window.addEventListener('resize', event => {
            setImage(event.target.innerWidth);
        });

        return () => window.onresize = null;

    }, [ setImage ]);

    return (
        <article className="align-center flex flex-column justify-between w-100 product-card">
            <figure className="product-card__image-container">
                <img ref={imageRef} src="" alt={ cart.name } className="d-block height-100 w-100" />
            </figure>
            <H3 customClass="product-card__name" text={ cart.name } />
            <SeeProductLink customClass="product-card__link bg-orange" />
        </article>
    );
};

export default ProductCard2;