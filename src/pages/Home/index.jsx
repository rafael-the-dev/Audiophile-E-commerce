import SeeProductLink from '../../components/SeeProductLink';
import './styles.css';

const Home = () => {
    return (
        <main>
            <section className="align-center flex flex-column justify-center bg-center no-repeat bg-cover
                width-100 hero">
                <div className="align-center flex flex-column justify-center text-center text-white  width-100 px-5">
                    <h1 className="hero__title">XX99 Mark II HeadphoneS</h1>
                    <p className="hero__description">
                        Experience natural, lifelike audio and exceptional build quality made 
                        for the passionate music enthusiast.
                    </p>
                    <SeeProductLink url="/" customClass="hero__link" />
                </div>
            </section>
        </main>
    );
};

export default Home;