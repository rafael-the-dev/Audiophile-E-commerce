import ProductCart from '../../components/Product-Cart';
import SeeProductLink from '../../components/SeeProductLink';
import headphones from '../../assets/images/shared/mobile/image-headphones.png';
import speakers from '../../assets/images/shared/mobile/image-speakers.png';
import earsphones from '../../assets/images/shared/mobile/image-earphones.png';
import earphone from '../../assets/images/home/mobile/image-earphones-yx1.jpg';
import bestGear from '../../assets/images/shared/mobile/image-best-gear.jpg'
import './styles.css';
import Card from '../../components/Card';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';

const Home = () => {
    const earphoneRef = useRef(null);
    const bestGearRef = useRef(null);

    const setImage = width => {
        if(width >= 992) {
            earphoneRef.current.src = require('../../assets/images/home/desktop/image-earphones-yx1.jpg').default;
            bestGearRef.current.src = require('../../assets/images/shared/desktop/image-best-gear.jpg').default;
        } else if(width >= 501) {
            earphoneRef.current.src =  require('../../assets/images/home/tablet/image-earphones-yx1.jpg').default;
            bestGearRef.current.src = require('../../assets/images/shared/tablet/image-best-gear.jpg').default;
        } else {
            earphoneRef.current.src =  require('../../assets/images/home/mobile/image-earphones-yx1.jpg').default;
            bestGearRef.current.src = require('../../assets/images/shared/mobile/image-best-gear.jpg').default;
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
                        <SeeProductLink url="/" customClass="hero__link" />
                    </div>
                </section>
                <section className="flex flex-column px-5 width-100 align-stretch-sm flex-row-sm
                    justify-between-sm px-lg products-cards">
                    <ProductCart url="/" name="Headphones" image={headphones}/>
                    <ProductCart url="/" name="Speakers" image={speakers}/>
                    <ProductCart url="/" name="Earphones" image={earsphones}/>
                </section>
                
                <section className="px-5 px-lg">
                    <div className="align-start flex justify-center flex-column bg-center no-repeat
                        bg-cover width-100 px-5 speaker-section">
                        <H2 customClass="speaker-section__title" text="ZX7 SPEAKER" />
                        <SeeProductLink url="/" customClass="text-black secondary" />
                    </div>
                </section>

                <section className="px-5 px-lg align-stretch-sm d-flex-sm flex-row-sm justify-center-sm
                    earphones-section">
                    <figure className="width-100 earphones-section__image-container">
                        <img
                            ref={earphoneRef}
                            src={earphone}
                            alt="YX1 EARPHONES"
                            className="d-block height-100 width-100"
                        />
                    </figure>
                    <div className="align-start flex justify-center flex-column 
                        width-100 px-5 earphones-section__content">
                        <H2 customClass="earphones-section__content-title" text="YX1 EARPHONES" />
                        <SeeProductLink url="/" customClass="others" />
                    </div>
                </section>

                <section className="align-center flex flex-column px-5 width-100 px-lg justify-between-md 
                    align-stretch-md best-gear">
                    <figure className="width-100 best-gear__image-container">
                        <img
                            ref={bestGearRef}
                            src={bestGear}
                            alt=""
                            className="d-block height-100 width-100"
                        />
                    </figure>
                    <div className="text-center px-5 best-gear__content">
                        <H2
                            customClass="uppercase best-gear__content-title"
                            text="Bringing you the"
                        >
                            <em className='best-gear__content-title--highlight'>best</em>
                            audio gear
                        </H2>
                        <p className="best-gear__content-description">
                            Located at the heart of New York City, Audiophile is the premier store for 
                            high end headphones, earphones, speakers, and audio accessories. We have a 
                            large showroom and luxury demonstration rooms available for you to browse and 
                            experience a wide range of our products. Stop by our store to meet some of the 
                            fantastic people who make Audiophile the best place to buy your portable audio 
                            equipment.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;