import React, {useState} from "react"
import './style-form.scss'
import { useSelector } from "react-redux";
import axios from "axios";
import Button from "../../../components/Button/Button";
import {loadStripe} from "@stripe/stripe-js";
import {makeRequest} from "../../../makeRequest";


const Form = () => {
    const cartItems = useSelector((state) => state.cart.products)

    // //new
    //
    // const [payByCreditCard,setPayByCreditCard] = useState(false);
    //
    // let ccForm = () => {
    //     <p> Swow CreditCard form here</p>
    // }
    //
    // let cdForm = () => {
    //    <p> Swow CashDelivery form here</p>
    // }
    // let variableForm = <h1> Credit Form</h1>;
    // if (!this.state.payByCreditCard) {
    //     variableForm = <h1> Cash  Delivery form</h1>;
    // }
    //
    // let paymentTypeHandler =  (e) => {
    // let value = e.target.value;
    // let ccSelected = false;
    // if (value == 'CC') {
    //     ccSelected = true;
    //   }
    //     this.setState({payByCreditCard: ccSelected});
    // }
    //
    // //end new

//**START of controlled input
    const [firstName, setFirstName] = React.useState('');
    const [secondName, setSecondName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [deliveryAddress, setDeliveryAddress] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('firstName:', firstName);
        console.log('secondName:', secondName);
        console.log('email:', email);
        console.log('phone:', phone);
        console.log('deliveryAddress:', deliveryAddress);
    }
//**END of controlled input
//Checkout
    const stripePromise = loadStripe(
        "pk_test_51MS8CGDhtufCoDjnZyf7MYjgOOjpS7OPMLd0RRfnO5xTJjNotjTNT4xB5N9V72Znd5CnXxrThvAHQVtwdIAyHuOF00Mh08hlMX"
    );


    const checkoutPayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (err) {
            console.log(err);
        }
    };

    // end of Checkout

//**START of axios request
    const getOrder = () => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/9264549700@mail.ru', {
            firstName: firstName,
            secondName: secondName,
            email: email,
            phone: phone,
            deliveryAddress: deliveryAddress,
            payByCreditCard: false,
            data: (JSON.stringify(cartItems))
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
//**END of axios request
//делаем чекбокс=первый вариант-оплата картой, второй вариант- оплата при получении.(при выборе это  чекбокса тут же подрендеривается формочка оплаты )

    return (
        <>
            <div className="form-wrp">
                <h1>Form of the order</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Choose your payment method</legend>
                        <input  type="radio" id="pay-card" name="payment" value="CC"/>
                        <label htmlFor="pay-card">Pay card</label>
                        <br></br>
                        <input   type="radio" id="pay-cash" name="payment" value="CD"/>
                        <label htmlFor="pay-cash">Pay cash</label>
                    </fieldset>

                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="secondName">Second Name</label>
                        <input
                            id="secondName"
                            type="text"
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <textarea
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="deliveryAddress">Delivery Address</label>
                        <input
                            id="deliveryAddress"
                            type="text"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                        />
                    </div>
                    <Button onClick={getOrder} type='submit' text='Next(Cash/uppon receipt)'
                            className="btn btn-lg btn-dark btn-block">
                    </Button>
                    <Button onClick={checkoutPayment} type='submit' text='Next(Pay with card)'
                            className="btn btn-lg btn-dark btn-block">
                    </Button>
                    <Button text='Cancel' className="btn btn-lg btn-dark btn-block">
                    </Button>


                </form>
            </div>
        </>
    );
};

export default Form;