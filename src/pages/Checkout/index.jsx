import Footer from '../../components/Footer';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import CartItem from '../../components/CartItem';
import InputGroup from '../../components/InputGroup';
import Label from '../../components/Label';
import TextField from '../../components/TextField';
import './styles.css';
import { useSelector } from 'react-redux';
import {selectCart} from '../../js/store/selectors';
import CartModel from '../../js/models/CartModel';
import { useMemo } from 'react';
import SummaryItem from '../../components/SummaryItem';
import { useRef } from 'react';
import Header from '../../components/Header';
import CartModal from '../../components/CartModal';

const Checkout = () => {
    const cart = useSelector(selectCart);
    const checkoutRef = useRef(null);
    const modalRef = useRef(null);

    const cartModel = useMemo(() => new CartModel(cart), [ cart ]);

    return (
        <>
            <Header modalRef={modalRef} currentPage={checkoutRef} />
            <main ref={checkoutRef} className="align-start-md flex flex-column flex-row-md justify-between-md checkout-main
                px-lg px-xl py-2 px-5">
                <section className="align-start flex flex-column radius-default px-5 py-1-5 w-100 billing">
                    <H1 text="Checkout" customClass="" />
                    <form className="w-100 billing__form">
                        <fieldset className="align-start flex flex-column py-1-5 w-100 billing__fieldset">
                            <legend className="text-orange ">Billing details</legend>
                            <div className="align-start flex justify-between flex-column w-100 flex-row-sm
                                align-center-sm flex-wrap-sm">
                                <InputGroup>
                                    <Label label="Name" />
                                    <TextField type="text" placeholder="Alexei Ward" />
                                    <Label label="Invalid name" customClass="d-none" />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Email Address" />
                                    <TextField type="email" placeholder="alexei@mail.com" />
                                    <Label label="Invalid e-mail" customClass="d-none" />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Phone Number" />
                                    <TextField type="text" placeholder="+1 202-555-0136" />
                                    <Label label="Incorrent phone number" customClass="d-none"/>
                                </InputGroup>
                            </div>
                        </fieldset>

                        <fieldset className="align-start flex flex-column py-1-5 w-100 shipping__fieldset">
                            <legend className="text-orange ">Billing details</legend>
                            <div className="align-start flex justify-between flex-column w-100 flex-row-sm
                                align-center-sm flex-wrap-sm">
                                <InputGroup>
                                    <Label label="Name" />
                                    <TextField type="text" placeholder="Alexei Ward" />
                                    <Label label="Invalid name" customClass="d-none" />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Email Address" />
                                    <TextField type="email" placeholder="alexei@mail.com" />
                                    <Label label="Invalid e-mail" customClass="d-none" />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Phone Number" />
                                    <TextField type="text" placeholder="+1 202-555-0136" />
                                    <Label label="Incorrent phone number" customClass="d-none"/>
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Phone Number" />
                                    <TextField type="text" placeholder="+1 202-555-0136" />
                                    <Label label="Incorrent phone number" customClass="d-none"/>
                                </InputGroup>
                            </div>
                        </fieldset>

                        <fieldset className="align-start flex flex-column py-1-5 w-100 shipping__fieldset">
                            <legend className="text-orange ">Billing details</legend>
                            <div className="align-start flex justify-between flex-column w-100 flex-row-sm
                                align-center-sm flex-wrap-sm">
                                <InputGroup>
                                    <Label label="Name" />
                                    <TextField type="text" placeholder="Alexei Ward" />
                                    <Label label="Invalid name" customClass="d-none" />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Email Address" />
                                    <TextField type="email" placeholder="alexei@mail.com" />
                                    <Label label="Invalid e-mail" customClass="d-none" />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Phone Number" />
                                    <TextField type="text" placeholder="+1 202-555-0136" />
                                    <Label label="Incorrent phone number" customClass="d-none"/>
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Phone Number" />
                                    <TextField type="text" placeholder="+1 202-555-0136" />
                                    <Label label="Incorrent phone number" customClass="d-none"/>
                                </InputGroup>
                            </div>
                        </fieldset>
                    </form>
                </section>
                <section className="align-start flex flex-column py-2 px-5 bg-white radius-default summary">
                    <H2 text="Summary" customClass="uppercase" />
                    <div className="py-2 align-start flex flex-column">
                        {
                            cartModel.list.map((item, index) => {
                                return (
                                    <CartItem 
                                        key={index} 
                                        cartItem={item} 
                                        customClass="cart-item__image-container--summary" 
                                        isSummaryItem
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="w-100">
                        <SummaryItem text="Total" value={cartModel.totalPrice()} />
                        <SummaryItem text="Total" value="50" />
                        <SummaryItem text="Total" value="1079" />
                        <SummaryItem text="Grand Total" value={cartModel.totalPrice()} customClass="text-orange"/>
                    </div>
                    <button to="/checkout" className="text-center decoration-none uppercase  bg-orange text-white 
                        outline-none border-none w-100 py-1 cart-modal__checkout">
                        checkout
                    </button>
                </section>
            </main>
            <Footer />
            <CartModal modalRef={modalRef} />  
        </>
    );
};

export default Checkout;