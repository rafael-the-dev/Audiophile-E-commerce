import SeeProductLink from '../../components/SeeProductLink';
import './styles.css';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import Footer from '../../components/Footer';
import ProductsList from '../../components/ProductsList';
import BestGear from '../../components/BestGear';
import ImageHelper from '../../js/helper/ImageHelper';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';

const Home = () => {
    const earphoneRef = useRef(null);
    const zx9SpeakerRef = useRef(null);
    const homeRef = useRef(null);
    const modalRef = useRef(null);

    const earphoneRefHelper = useMemo(() => {
        return new ImageHelper(earphoneRef)
    }, [ ]);

    const zx9SpeakerRefHelper = useMemo(() => {
        return new ImageHelper(zx9SpeakerRef)
    }, [ ]);

    const setImage = useCallback(width => {
        if(width >= 992) {
            earphoneRefHelper.addImage('home/desktop/image-earphones-yx1.jpg');
            zx9SpeakerRefHelper.addImage('home/desktop/image-speaker-zx9.png');
        } else if(width >= 501) {
            earphoneRefHelper.addImage('home/tablet/image-earphones-yx1.jpg');
            zx9SpeakerRefHelper.addImage('home/tablet/image-speaker-zx9.png');
        } else {
            earphoneRefHelper.addImage('home/mobile/image-earphones-yx1.jpg');
            zx9SpeakerRefHelper.addImage('home/mobile/image-speaker-zx9.png');
        }
    }, [ earphoneRefHelper, zx9SpeakerRefHelper]);

    useEffect(() => {
        setImage(window.innerWidth); 

        window.addEventListener('resize', event => {
            setImage(event.target.innerWidth);
        });
    }, [ setImage ]);

    return (
        <>
            <Header modalRef={modalRef} currentPage={homeRef}/>
            <div ref={homeRef}>
            <main>
                <section className="align-center flex flex-column justify-center bg-center no-repeat bg-cover
                    align-start-desktop px-tablet px-lg px-xl width-100 hero">
                    <div className="align-center flex flex-column justify-center text-center text-white 
                        align-start-desktop width-100 px-5 hero__division">
                        <H1 customClass="hero__title font-weight-7" text="XX99 Mark II"><br/>HeadphoneS</H1>
                        <p className="opacity-7 hero__description">
                            Experience natural, lifelike audio and exceptional build quality made 
                            for the passionate music enthusiast.
                        </p>
                        <SeeProductLink url="./headphones/4" customClass="hero__link" />
                    </div>
                </section>
                <ProductsList />
                <section className="px-5 px-lg px-xl">
                    <div className="align-center flex flex-column justify-between px-5 w-100
                        radius-default py-2-5 bg-orange product-section">
                        <figure className="w-100 product-section__image-container">
                            <img
                                ref={zx9SpeakerRef}
                                src=""
                                alt="ZX9 SPEAKER"
                                className="d-block height-100 w-100"
                            />
                        </figure>
                        <div className="align-center flex flex-column justify-between px-5 w-100 py-2-5
                            product-section__content">
                            <H2 customClass="text-white" text="ZX9 SPEAKER" />
                            <p className="text-white text-center opacity-8 product-section__content-description">
                                Upgrade to premium speakers that are phenomenally built to deliver truly 
                                remarkable sound.
                            </p>
                            <SeeProductLink url="./speakers/6" customClass="text-black secondary" />
                        </div>
                    </div>
                </section>
                <section className="px-5 px-lg px-xl">
                    <div className="align-start flex justify-center flex-column bg-center no-repeat
                        bg-cover w-100 px-5 radius-default speaker-section">
                        <H2 customClass="speaker-section__title font-weight-7" text="ZX7 SPEAKER" />
                        <SeeProductLink url="./speakers/5" customClass="text-black secondary" />
                    </div>
                </section>
                <section className="px-5 px-lg px-xl align-stretch-sm d-flex-sm flex-row-sm justify-center-sm
                    earphones-section">
                    <figure className="w-100 radius-default earphones-section__image-container">
                        <img
                            ref={earphoneRef}
                            src=""
                            alt="YX1 EARPHONES"
                            className="d-block radius-default height-100 w-100"
                        />
                    </figure>
                    <div className="align-start py-2-5  radius-default flex justify-center flex-column 
                        w-100 px-5 earphones-section__content">
                        <H2 customClass="earphones-section__content-title font-weight-7" text="YX1 EARPHONES" />
                        <SeeProductLink url="./earphones/1" customClass="others" />
                    </div>
                </section>
                <BestGear />
            </main>
            <Footer />
        </div>
            <CartModal modalRef={modalRef} /> 
        </>
    );
};

export default Home;