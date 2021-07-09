import ProductCart from '../../components/Product-Cart';
import SeeProductLink from '../../components/SeeProductLink';
import headphones from '../../assets/images/shared/mobile/image-headphones.png';
import speakers from '../../assets/images/shared/mobile/image-speakers.png';
import earsphones from '../../assets/images/shared/mobile/image-earphones.png';
import './styles.css';

const Home = () => {
    return (
        <main>
            <section className="align-center flex flex-column justify-center bg-center no-repeat bg-cover
                align-start-desktop px-tablet px-lg width-100 hero">
                <div className="align-center flex flex-column justify-center text-center text-white 
                    align-start-desktop width-100 px-5 hero__division">
                    <h1 className="hero__title">XX99 Mark II<br/>HeadphoneS</h1>
                    <p className="hero__description">
                        Experience natural, lifelike audio and exceptional build quality made 
                        for the passionate music enthusiast.
                    </p>
                    <SeeProductLink url="/" customClass="hero__link" />
                </div>
            </section>
            <section className="flex flex-column px-5 width-100 align-stretch-sm flex-row-sm
                justify-between-sm px-lg products-cards">
                <ProductCart url="/" name="Headphones" image={headphones}/>
                <ProductCart url="/" name="Speakers" image={speakers}/>
                <ProductCart url="/" name="Earphones" image={earsphones}/>
            </section>
        </main>
    );
};

export default Home;