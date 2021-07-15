import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './styles.css';

const Footer = () => {
    return (
        <footer className="align-center flex flex-column relative justify-between px-5 px-lg footer
        align-start-sm">
            <div className="absolute footer__bar"></div>
            <div className="align-center flex flex-column justify-between w-100
                align-start-sm flex-row-md">
                <Logo url="./#header" customClass="footer__logo"/>
                <nav className="footer__navigation">
                    <ul className="align-center flex flex-column justify-between footer__list
                        flex-row-sm">
                        <li className="footer__item">
                            <Link to="/" className="block uppercase text-white footer__link">
                                Home
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link to="./headphones" className="block uppercase text-white footer__link">
                                Headphones
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link to="./speakers" className="block uppercase text-white footer__link">
                                Speakers
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link to="./earphones" className="block uppercase text-white footer__link">
                                Earphones
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <p className="text-white text-center footer__description">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of 
                music lovers and sound specialists who are devoted to helping you get the most out 
                of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="align-center flex flex-column justify-center footer__division w-100
                flex-row-sm justify-between-sm">
                <p className="text-white footer__copyright">Copyright 2021. All Rights Reserved</p>
                <div className="align-center flex justify-center footer__social-media">
                    <Link to="/" className="footer__social-media-link">
                        <i className="d-block bg-center no-repeat bg-contain footer__icon footer__icon--facebook"></i>
                    </Link>
                    <Link to="/" className="footer__social-media-link">
                        <i className="d-block bg-center no-repeat bg-contain footer__icon footer__icon--twitter"></i>
                    </Link>
                    <Link to="/" className="footer__social-media-link">
                        <i className="d-block bg-center no-repeat bg-contain footer__icon footer__icon--instagram"></i>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;