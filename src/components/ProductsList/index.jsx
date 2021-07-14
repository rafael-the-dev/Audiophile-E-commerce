import './styles.css';
import ProductCart from "../Product-Cart";
import headphones from '../../assets/images/shared/mobile/image-headphones.png';
import speakers from '../../assets/images/shared/mobile/image-speakers.png';
import earsphones from '../../assets/images/shared/mobile/image-earphones.png';

const ProductsList = () => {
    return (
        <section className="flex flex-column px-5 width-100 align-stretch-sm flex-row-sm
            justify-between-sm px-lg products-cards">
            <ProductCart url="/" name="Headphones" image={headphones}/>
            <ProductCart url="/" name="Speakers" image={speakers}/>
            <ProductCart url="/" name="Earphones" image={earsphones}/>
        </section>
    );
};

export default ProductsList;