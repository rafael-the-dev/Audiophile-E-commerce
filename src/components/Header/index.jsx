import './styles.css';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../js/store/selectors';
import { useDispatch } from 'react-redux';
import { getLocalStorageData } from '../../js/store/actions';
import { useEffect, useMemo } from 'react';
import CartModel from '../../js/models/CartModel';
import { useRef } from 'react';

const Header = ({ modalRef, currentPage }) => {
    const navigationRef = useRef(null);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const cartModel = useMemo(() => {
        return new CartModel(cart);
    }, [ cart ]);

    useEffect(() => {
        dispatch(getLocalStorageData());
    }, [ dispatch ]);

    const clickHandler = () => {
        modalRef.current.classList.toggle('cart-modal--toggle');
        currentPage.current.classList.toggle('modal-opened');
        currentPage.current.addEventListener('click', event => {
            modalRef.current.classList.remove('cart-modal--toggle');
            currentPage.current.classList.remove('modal-opened');
        })
    };

    const menuHandler = event => {
        navigationRef.current.classList.toggle('header__navigation--toggle');
        event.target.classList.toggle('fa-bars');
        event.target.classList.toggle('fa-times');
    };

    return (
        <header id="header" className="flex px-5 width-100 px-lg px-xl header">
            <div className="align-center flex justify-between width-100 header__division">
                <div className="align-center flex justify-start header__division-2">
                    <button
                        className="fa fas fa-bars fa-icon background-transparent border-none outline-none
                        text-white d-none-md header__menu-button"
                        aria-label="Menu button"
                        onClick={menuHandler}>
                    </button>
                    <Logo customClass="d-none d-block-tablet logo--tablet"/>
                </div>
                <Logo customClass="logo__header-mobile d-none-tablet" />
                <nav ref={navigationRef} className="d-none header__navigation d-flex-md">
                    <ul className="py-1 align-center flex flex-column flex-row-md justify-between header__list">
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
                <button onClick={clickHandler}
                    className="fa fas fa-shopping-cart fa-icon background-transparent border-none outline-none text-white"
                    aria-label="Menu button">
                        <sup className="bg-orange cart-itens">{ cartModel.totalItens() }</sup>
                </button>
            </div>
        </header>
    );
};

export default Header;