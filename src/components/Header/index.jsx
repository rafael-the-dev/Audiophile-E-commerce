import './styles.css';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex px-5 width-100 header">
            <div className="align-center flex justify-between width-100 header__division">
                <div className="align-center flex justify-start header__division-2">
                    <button
                        className="fa fa-bars fa-icon background-transparent border-none outline-none
                        text-white header__menu-button"
                        aria-label="Menu button">
                    </button>
                    <Logo customClass="logo--tablet"/>
                </div>
                <Logo customClass="logo__header-mobile" />
                <nav className="d-none header__navigation">
                    <ul className="align-center flex justify-between header__list">
                        <li className="header__item">
                            <Link to="/" className="block uppercase text-white header__link">Home</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/" className="block uppercase text-white header__link">Headphone</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/" className="block uppercase text-white header__link">Speakers</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/" className="block uppercase text-white header__link">Earphones</Link>
                        </li>
                    </ul>
                </nav>
                <button
                    className="fa fa-shopping-cart fa-icon background-transparent border-none outline-none text-white"
                    aria-label="Menu button">
                </button>
            </div>
        </header>
    );
};

export default Header;