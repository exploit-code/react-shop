import React, { useState } from "react"
import './style-form.scss'
import { useSelector } from "react-redux";
import axios from "axios";
import Button from "../../../components/Button/Button";


const Form = () => {
    const cartItems = useSelector((state) => state.cart.products)

    //**START of controlled input
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [payMethod, setPayMethod] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
    }
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
            payByCreditCard: payMethod,
            data: (JSON.stringify(cartItems))
        })
            .then(response => (console.log(response),
                alert('Success! Your food is coming!')))
            .catch(error => console.log(error));
    }
    //**END of axios request
    const changePaymentMethod = (e) => {
        setPayMethod(e.target.value)
    }

    return (
        <>
            <h1>Form of the order</h1>
            <div className="form-wrp">

                <form onSubmit={handleSubmit}>
                    <div className="form-radio">
                        <div>
                            <label className="form-label" htmlFor="PayCard">Payment by terminal</label>
                            <input type="radio" name="card" value="PayCard" id="pay-card"
                                checked={payMethod === 'PayCard'}
                                onChange={changePaymentMethod} />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="PayCard">Payment in cash</label>
                            <input type="radio" name="cash" value="PayCash" id="pay-cash"
                                checked={payMethod === 'PayCash'}
                                onChange={changePaymentMethod} />
                        </div>
                    </div>
                    <div className="form-buyOrder">
                        <label className="form-label" htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-buyOrder">
                        <input className="form-input"
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-buyOrder">
                        <label className="form-label" htmlFor="secondName">Second Name</label>
                    </div>
                    <div className="form-buyOrder">
                        <input className="form-input"
                            id="secondName"
                            type="text"
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
                        />
                    </div>
                    <div className="form-buyOrder">
                        <label className="form-label" htmlFor="email">Email</label>
                    </div>
                    <div className="form-buyOrder">
                        <input className="form-input"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-buyOrder">
                        <label className="form-label" htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-buyOrder">
                        <input className="form-input"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-buyOrder" >
                        <label className="form-label" htmlFor="deliveryAddress">Delivery Address</label>
                    </div>
                    <div className="form-buyOrder" >
                        <input className="form-input"
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
                </form>
            </div>
        </>
    );
};

export default Form;
