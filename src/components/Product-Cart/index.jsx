import { Link } from "react-router-dom";
import './styles.css'

const ProductCart = ({ url, image, name }) => {
    console.log()
    return ( 
        <article className="align-center flex flex-column justify-center text-center text-black width-100 cart">
            <figure className="cart__image-container">
                <img
                    src={ image}
                    alt={ name } 
                    className="d-block height-100 width-100"
                />
            </figure>
            <h2 className="uppercase cart__name">{ name }</h2>
            <Link to={ url } className="uppercase decoration-none text-black cart__link">
                Shop
                <i className="fa fas fa-chevron-right cart__icon"></i>
            </Link>
        </article>
    );
};

export default ProductCart;