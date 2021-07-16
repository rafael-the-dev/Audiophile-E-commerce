import './styles.css';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header" className="flex px-5 width-100 px-lg header">
            <div className="align-center flex justify-between width-100 header__division">
                <div className="align-center flex justify-start header__division-2">
                    <button
                        className="fa fas fa-bars fa-icon background-transparent border-none outline-none
                        text-white d-none-md header__menu-button"
                        aria-label="Menu button">
                    </button>
                    <Logo customClass="d-none d-block-tablet logo--tablet"/>
                </div>
                <Logo customClass="logo__header-mobile d-none-tablet" />
                <nav className="d-none header__navigation d-flex-md">
                    <ul className="align-center flex justify-between header__list">
                        <li className="header__item">
                            <Link to="/" className="block uppercase text-white font-weight-7 header__link">Home</Link>
                        </li>
                        <li className="header__item">
                            <Link to="./headphones" className="block uppercase text-white font-weight-7 header__link">
                                Headphones
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to="./speakers" className="block uppercase text-white font-weight-7 header__link">
                                Speakers
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to="./earphones" className="block uppercase text-white font-weight-7 header__link">
                                Earphones
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button
                    className="fa fas fa-shopping-cart fa-icon background-transparent border-none outline-none text-white"
                    aria-label="Menu button">
                </button>
            </div>
        </header>
    );
};

export default Header;