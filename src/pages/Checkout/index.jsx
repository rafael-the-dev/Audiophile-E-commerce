import Footer from '../../components/Footer';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import CartItem from '../../components/CartItem';
import InputGroup from '../../components/InputGroup';
import Label from '../../components/Label';
import TextField from '../../components/TextField';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {selectCart} from '../../js/store/selectors';
import CartModel from '../../js/models/CartModel';
import { useMemo } from 'react';
import SummaryItem from '../../components/SummaryItem';
import { useRef } from 'react';
import Header from '../../components/Header';
import CartModal from '../../components/CartModal';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { removeAll } from '../../js/store/actions';
import { useEffect } from 'react';

const Checkout = () => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const checkoutRef = useRef(null);
    const modalRef = useRef(null);
    const checkoutDialogRef = useRef(null);
    const eMoneyRef = useRef(null);
    const onDeliveryRef = useRef(null);
    const warningRef = useRef(null);

    const [ name, setName ] = useState("");
    const [ isInValidName, setIsInvalidName ] = useState(true);

    const [ email, setEmail ] = useState("");
    const [ isInValidEmail, setIsInvalidEmail ] = useState(false);

    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ isInValidPhoneNumber, setIsInvalidPhoneNumber ] = useState(false);

    const [ address, setAddress ] = useState("");
    const [ isInValidAddress, setIsInvalidAddress ] = useState(false);

    const [ zipCode, setZipCode ] = useState("");
    const [ isInValidZipCode, setIsInvalidZipCode ] = useState(false);

    const [ city, setCity ] = useState("");
    const [ isInValidCity, setIsInvalidCity ] = useState(false);

    const [ country, setCountry ] = useState("");
    const [ isInValidCountry, setIsInvalidCountry ] = useState(false);

    const [ emoneyNumber, setEmoneyNumber ] = useState("");
    const [ isInvalidmoneyNumber, setIsInvalidEmoneyNumber ] = useState(false);

    const [ emoneyPin, setEmoneyPin ] = useState("");
    const [ isInvalidEmoneyPin, setIsInvalidEmoneyPin ] = useState(false);

    const [ paymentMethod, setPaymentMethod ] = useState("e-money");
    const [ shipping, setShipping ] = useState(50);

    const [ canIViewAll, setCanIViewAll ] = useState(false);

    const [ canISubmit, setCanISumbmit ] = useState(true);

    const cartModel = useMemo(() => new CartModel(cart, shipping ), [ cart, shipping ]);

    const history = useHistory();

    const isValidForm = () => {
        let validForm = true;

        [isInValidName, isInValidEmail, isInValidPhoneNumber, isInValidAddress,
            isInValidZipCode, isInValidCity, isInValidCountry].forEach(item => {
            if(item) {
                validForm = false;
            }
        });

        return validForm;
    };

    const clickHandler = () => {
        if(isValidForm()) {
            checkoutDialogRef.current.classList.toggle('cart-modal--toggle');
            checkoutDialogRef.current.focus();
            checkoutRef.current.classList.toggle('modal-opened');
            setCanISumbmit(c => true);
            const form = { name, city, country, zipCode, phoneNumber, email, address, paymentMethod }

            checkoutRef.current.addEventListener('click', event => {
                checkoutDialogRef.current.classList.remove('cart-modal--toggle');
                checkoutRef.current.classList.remove('modal-opened');
            });
        } else {
            setCanISumbmit(c => false);
        }
    };

    const canIViewllHandler = (event) => {
        setCanIViewAll(b => !b);
    };

    const cloncludTrasantion = () => {
        dispatch(removeAll());
        history.push('/')
    };

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if(cartModel.totalItens() < 1) {
                history.push('/');
            }
        }, 500);

        return () => clearTimeout(timeOut);
    }, [ cartModel, history ]);

    const selectHandler = event => {
        if(event.target.getAttribute('data-payment-method') === "e-money") {
            eMoneyRef.current.setAttribute('checked', true);
            
            setPaymentMethod(p => 'e-money');
            setShipping(s => 50);
        } else if(event.target.getAttribute('data-payment-method') === "on-delivery"){
            onDeliveryRef.current.setAttribute('checked', true);
            
            setPaymentMethod(p => 'on-delivery');
            setShipping(s => 0);
            setIsInvalidEmoneyNumber(e => false);
            setIsInvalidEmoneyPin(e => false);
        }
    };

    return (
        <>
            <Header modalRef={modalRef} currentPage={checkoutRef} />
            <div ref={warningRef} className={`px-5 py-1-5 px-lg px-xl align-center justify-center 
                ${canISubmit ? 'd-none' : 'flex'} warning`}>
                <p className="d-block w-100 text-center uppercase font-weight-7 text-white warning__text">
                    Fill in the form bellow
                </p>
            </div>
            <main ref={checkoutRef} className="align-start-md flex flex-column flex-row-md justify-between-md checkout-main
                px-lg px-xl py-2 px-5">
                    
                <section className="align-start flex flex-column radius-default px-5 py-1-5 w-100 billing">
                    <H1 text="Checkout" customClass="" />
                    <form className="w-100 billing__form">
                        <fieldset className="align-start flex flex-column py-1-5 w-100 billing__fieldset">
                            <legend className="text-orange uppercase font-weight-7">
                                Billing details
                            </legend>
                            <div className="align-start flex justify-between flex-column w-100 flex-row-sm
                                align-center-sm flex-wrap-sm">
                                <InputGroup>
                                    <Label label="Name" customClass="font-weight-6 input-group__label" />
                                    <TextField
                                        type="text" 
                                        placeholder="Alexei Ward" 
                                        pattern="[a-zA-Z]{2,}(\s?[a-zA-Z]+)*" 
                                        required
                                        setValue={setName}
                                        setIsValidInput={setIsInvalidName}
                                    />
                                    <Label
                                        label="Invalid name" 
                                        customClass={isInValidName ? 'error-message' : 'd-none'} 
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Email Address" customClass="font-weight-6 input-group__label" />
                                    <TextField
                                        type="email"
                                        placeholder="alexei@mail.com"
                                        pattern="[a-zA-z0-9]{2,30}@gmail\.com?(\.[a-z]{2})?" 
                                        required
                                        setValue={setEmail}
                                        setIsValidInput={setIsInvalidEmail}
                                    />
                                    <Label
                                        label="Invalid e-mail" 
                                        customClass={isInValidEmail ? 'error-message' : 'd-none'} 
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Phone Number" customClass="font-weight-6 input-group__label" />
                                    <TextField
                                        type="number" 
                                        placeholder="+1 202-555-0136" 
                                        pattern="(\d{2,3})?\d{4,5}\d{4}" 
                                        required
                                        setValue={setPhoneNumber}
                                        setIsValidInput={setIsInvalidPhoneNumber}
                                    />
                                    <Label
                                        label="Incorrent phone number" 
                                        customClass={isInValidPhoneNumber ? 'error-message' : 'd-none'}
                                    />
                                </InputGroup>
                            </div>
                        </fieldset>

                        <fieldset className="align-start flex flex-column py-1-5 w-100 shipping__fieldset">
                            <legend className="text-orange uppercase font-weight-7">
                                Shipping info
                            </legend>
                            <div className="align-start flex justify-between flex-column w-100 flex-row-sm
                                align-center-sm flex-wrap-sm">
                                <InputGroup  customClass="address-field">
                                    <Label label="Address" customClass="font-weight-6 input-group__label" />
                                    <TextField
                                        type="text" 
                                        placeholder="Alexei Ward" 
                                        pattern="[a-zA-Z0-9]+([\s\,]\s?[a-zA-Z0-9])*" 
                                        required
                                        setValue={setAddress}
                                        setIsValidInput={setIsInvalidAddress}
                                    />
                                    <Label 
                                        label="Invalid address" 
                                        customClass={isInValidAddress ? 'error-message' : 'd-none'}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Zip code" customClass="font-weight-6 input-group__label" />
                                    <TextField
                                        type="number" 
                                        placeholder="10001"
                                        pattern="\d{4,5}" 
                                        required
                                        setValue={setZipCode}
                                        setIsValidInput={setIsInvalidZipCode}
                                    />
                                    <Label 
                                        label="Invalid ZIP code" 
                                        customClass={isInValidZipCode ? 'error-message' : 'd-none'}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="City" customClass="font-weight-6 input-group__label" />
                                    <TextField 
                                        type="text" 
                                        placeholder="New York"
                                        pattern="[a-zA-Z]+(\s?[a-zA-Z]+)*" 
                                        required
                                        setValue={setCity}
                                        setIsValidInput={setIsInvalidCity} 
                                    />
                                    <Label 
                                        label="Invalid city" 
                                        customClass={isInValidCity ? 'error-message' : 'd-none'}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Label label="Country" customClass="font-weight-6 input-group__label"/>
                                    <TextField 
                                        type="text" 
                                        placeholder="Unite State of America" 
                                        pattern="[a-zA-Z]+(\s?[a-zA-Z]+)*" 
                                        required
                                        setValue={setCountry}
                                        setIsValidInput={setIsInvalidCountry}
                                    />
                                    <Label 
                                        label="Invalid country" 
                                        customClass={isInValidCountry ? 'error-message' : 'd-none'}
                                    />
                                </InputGroup>
                            </div>
                        </fieldset>

                        <fieldset className="align-start flex flex-column py-1-5 w-100 shipping__fieldset">
                            <legend className="text-orange uppercase font-weight-7">
                                Paymant details
                            </legend>
                            <div className="align-start flex flex-column justify-between flex-column 
                                w-100 flex-row-sm">
                                <Label 
                                    label="Payment method" 
                                    customClass="font-weight-6 w-100
                                    input-group__label payment-method__title" 
                                />
                                <div className="align-start flex flex-column w-100 flex 
                                    align-center payment-method__group">
                                    <label className="py-1 px-5 w-100 font-weight-6 flex 
                                        align-center payment-method__label"
                                        data-payment-method="e-money"
                                        onClick={selectHandler}>
                                        <input
                                            type="radio" 
                                            name="payment-method" 
                                            value="e-Money"
                                            className="d-none absolute radio-input" 
                                            ref={eMoneyRef}
                                            defaultChecked
                                        />
                                        <span 
                                            data-payment-method="e-money" 
                                            className="checkmark" 
                                            onClick={selectHandler}>
                                        </span>
                                        e-Money
                                    </label>
                                    <label className="w-100 py-1 px-5 font-weight-6 flex
                                        align-center payment-method__label"
                                        data-payment-method="on-delivery"
                                        onClick={selectHandler}>
                                        <input
                                            type="radio" 
                                            name="payment-method" 
                                            value="cash on delivery"
                                            className="d-none absolute radio-input" 
                                            ref={onDeliveryRef}
                                        />
                                        <span 
                                            data-payment-method="on-delivery"
                                            className="checkmark" 
                                            onClick={selectHandler}>
                                        </span>
                                        Cash on Delivery
                                    </label>
                                </div>
                            </div>
                            {
                                paymentMethod === 'e-money' ? (
                                    <div className="align-stretch flex flex-column justify-between w-100
                                        flex-row-sm">
                                        <InputGroup>
                                            <Label label="e-Money Number" customClass="font-weight-6 input-group__label" />
                                            <TextField
                                                type="number" 
                                                placeholder="10001"
                                                pattern="\d{9}" 
                                                required
                                                setValue={setEmoneyNumber}
                                                setIsValidInput={setIsInvalidEmoneyNumber}
                                            />
                                            <Label 
                                                label="Invalid e-Money Number" 
                                                customClass={isInValidZipCode ? 'error-message' : 'd-none'}
                                            />
                                        </InputGroup>
                                        <InputGroup>
                                            <Label label="e-Money PIN" customClass="font-weight-6 input-group__label" />
                                            <TextField
                                                type="password" 
                                                placeholder="10001"
                                                pattern="\d{4}" 
                                                required
                                                setValue={setEmoneyPin}
                                                setIsValidInput={setIsInvalidEmoneyPin}
                                            />
                                            <Label 
                                                label="Invalid e-Money PIN" 
                                                customClass={isInValidZipCode ? 'error-message' : 'd-none'}
                                            />
                                        </InputGroup>
                                    </div>
                                ) : (
                                    <div className="py-1 d-block w-100">
                                        <p className="d-block text-center w-100 cash-on-delivery">
                                            The ‘Cash on Delivery’ option enables you to pay in cash when 
                                            our delivery courier arrives at your residence. Just make 
                                            sure your address is correct so that your order will not be 
                                            cancelled.
                                        </p>
                                    </div>
                                )
                            }
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
                        <SummaryItem text="Shipping" value={ cartModel.shipping } />
                        <SummaryItem text="Vat(Included)" value={ cartModel.vat().toFixed(2)}/>
                        <SummaryItem text="Grand Total" value={cartModel.totalGrand()} customClass="text-orange"/>
                    </div>
                    <button type="submit" className="text-center decoration-none uppercase  bg-orange text-white 
                        outline-none border-none w-100 py-1 cart-modal__checkout"
                        onClick={clickHandler}>
                        checkout
                    </button>
                </section>
            </main>
            <Footer />
            <div ref={checkoutDialogRef} role="dialog" className="align-start absolute d-none flex-column 
                px-5 py-1-5 radius-default checkout-dialog">
                <h2 className="text-left text-black font-weight-7 fa fa-check uppercase checkout-dialog__title">
                    Thank you<br/>for your order
                </h2>
                <p className="text-left text-black opacity-8 checkout-dialog__description">
                    you will receive an email confirmation shortly
                </p>
                <div className="align-center flex flex-column justify-between radius-default w-100 
                    checkout-dialog__division align-stretch-sm flex-row-sm">
                    <div className="px-5 align-center flex flex-column checkout-dialog__content">
                        {
                            canIViewAll ? (
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
                            ) : (
                                cartModel.list.slice(0, 1).map((item, index) => {
                                    return (
                                        <CartItem 
                                            key={index} 
                                            cartItem={item} 
                                            customClass="cart-item__image-container--summary" 
                                            isSummaryItem
                                        />
                                    )
                                })
                            )
                        }
                        
                        { (cartModel.totalItens() - 1) > 0 ? 
                            (<button
                                onClick={canIViewllHandler}
                                className="outline-none border-none bg-transparent checkout-dialog__others-itens">
                                { canIViewAll ? 'view less' : `and (${cartModel.totalItens() - 1}) other item(s)`}
                            </button>) : '' }
                    </div>
                    <div className="uppercase align-start flex flex-column justify-center py-1-5 px-5 w-100 text-white checkout-dialog__total-grand">
                        <p className=" opacity-7">Grand total</p><br/>
                        <p className="d-block font-weight-7 grand">${cartModel.totalGrand()}</p>
                    </div>
                </div>
                <button
                    onClick={cloncludTrasantion} 
                    className="text-center decoration-none uppercase  bg-orange text-white outline-none 
                    border-none w-100 py-1 cart-modal__checkout">
                    back to home
                </button>
            </div>
            <CartModal modalRef={modalRef} />  
        </>
    );
};

export default Checkout;