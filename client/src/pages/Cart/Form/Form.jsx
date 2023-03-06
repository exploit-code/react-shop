import React, { useState } from "react"
import './style-form.scss'
import { useSelector } from "react-redux";
import axios from "axios";
import Button from "../../../components/Button/Button";


const Form = () => {
    const cartItems = useSelector((state) => state.cart.products)

    //**START of controlled input
    const [firstName, setFirstName] = React.useState('');
    const [secondName, setSecondName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [deliveryAddress, setDeliveryAddress] = React.useState('');


    // end of Checkout

    //**START of axios request
    const getOrder = () => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/hasanovmaxim@yandex.ru', {
            firstName: firstName,
            secondName: secondName,
            email: email,
            phone: phone,
            deliveryAddress: deliveryAddress,
            payByCreditCard: 'Cash or Card',
            data: (JSON.stringify(cartItems))
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
    //**END of axios request

    return (
        <>
            <div className="form-wrp">
                <h1>Form of the order</h1>
                <form>
                    <div>

                    </div>
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
                        <input
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
                    <div className="form-btn-buyOrder">
                        <Button onClick={getOrder} type='submit' text='Place an order'
                            className="form-btn-buyOrder">
                        </Button>
                    </div>
                    {/*<Button onClick={checkoutPayment} type='submit' text='Pay with Card'*/}
                    {/*        className="btn btn-lg btn-dark btn-block">*/}
                    {/*</Button>*/}
                    {/*<Button text='Cancel' className="btn btn-lg btn-dark btn-block">*/}
                    {/*</Button>*/}
                </form>
            </div>
        </>
    );
};

export default Form;
