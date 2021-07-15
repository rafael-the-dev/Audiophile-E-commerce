import SeeProductLink from '../../components/SeeProductLink';
import earphone from '../../assets/images/home/mobile/image-earphones-yx1.jpg';
import zx9Speaker from '../../assets/images/home/mobile/image-speaker-zx9.png';
import './styles.css';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import ProductsList from '../../components/ProductsList';
import BestGear from '../../components/BestGear';

const Home = () => {
    const earphoneRef = useRef(null);
    const zx9SpeakerRef = useRef(null);

    const setImage = width => {
        if(width >= 992) {
            earphoneRef.current.src = require('../../assets/images/home/desktop/image-earphones-yx1.jpg').default;
            zx9SpeakerRef.current.src = require('../../assets/images/home/desktop/image-speaker-zx9.png').default;
        } else if(width >= 501) {
            earphoneRef.current.src =  require('../../assets/images/home/tablet/image-earphones-yx1.jpg').default;
            zx9SpeakerRef.current.src = require('../../assets/images/home/tablet/image-speaker-zx9.png').default;
        } else {
            earphoneRef.current.src =  require('../../assets/images/home/mobile/image-earphones-yx1.jpg').default;
            zx9SpeakerRef.current.src = require('../../assets/images/home/mobile/image-speaker-zx9.png').default;
        }
    }

    useEffect(() => {
        setImage(window.innerWidth); 

        window.addEventListener('resize', event => {
            setImage(event.target.innerWidth);
        });
    }, []);
    return (
        <>
            <main>
                <section className="align-center flex flex-column justify-center bg-center no-repeat bg-cover
                    align-start-desktop px-tablet px-lg width-100 hero">
                    <div className="align-center flex flex-column justify-center text-center text-white 
                        align-start-desktop width-100 px-5 hero__division">
                        <H1 customClass="hero__title" text="XX99 Mark II"><br/>HeadphoneS</H1>
                        <p className="hero__description">
                            Experience natural, lifelike audio and exceptional build quality made 
                            for the passionate music enthusiast.
                        </p>
                        <SeeProductLink url="./headphones/4" customClass="hero__link" />
                    </div>
                </section>
                <ProductsList />
                <section className="px-5 px-lg">
                    <div className="align-center flex flex-column justify-between px-5 w-100
                        radius-default product-section">
                        <figure className="w-100 product-section__image-container">
                            <img
                                ref={zx9SpeakerRef}
                                src={zx9Speaker}
                                alt="ZX9 SPEAKER"
                                className="d-block height-100 w-100"
                            />
                        </figure>
                        <div className="align-center flex flex-column justify-between px-5 w-100
                            product-section__content">
                            <H2 customClass="text-white" text="ZX9 SPEAKER" />
                            <p className="text-white text-center product-section__content-description">
                                Upgrade to premium speakers that are phenomenally built to deliver truly 
                                remarkable sound.
                            </p>
                            <SeeProductLink url="/" customClass="text-black secondary" />
                        </div>
                    </div>
                </section>
                <section className="px-5 px-lg">
                    <div className="align-start flex justify-center flex-column bg-center no-repeat
                        bg-cover w-100 px-5 radius-default speaker-section">
                        <H2 customClass="speaker-section__title" text="ZX7 SPEAKER" />
                        <SeeProductLink url="/" customClass="text-black secondary" />
                    </div>
                </section>
                <section className="px-5 px-lg align-stretch-sm d-flex-sm flex-row-sm justify-center-sm
                    earphones-section">
                    <figure className="w-100 radius-default earphones-section__image-container">
                        <img
                            ref={earphoneRef}
                            src={earphone}
                            alt="YX1 EARPHONES"
                            className="d-block radius-default height-100 w-100"
                        />
                    </figure>
                    <div className="align-start flex justify-center flex-column 
                        w-100 px-5 earphones-section__content">
                        <H2 customClass="earphones-section__content-title" text="YX1 EARPHONES" />
                        <SeeProductLink url="/" customClass="others" />
                    </div>
                </section>
                <BestGear />
            </main>
            <Footer />
        </>
    );
};

export default Home;