import React from "react"
import './style-form.scss'
import { useSelector } from "react-redux";
import axios from "axios";

const Form = () => {
    const cartItems = useSelector((state) => state.cart.products)

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

//**START of axios request
    const getOrder = () => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/9264549700@mail.ru', {
            firstName: firstName,
            secondName: secondName,
            email: email,
            phone: phone,
            deliveryAddress: deliveryAddress,
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
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">Name</label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="secondName">secondName</label>
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
                    <button onClick={getOrder} type="submit">Submit</button>
                </form>
                {/*<form target="_blank" >*/}
                {/*    <div className="form-group">*/}
                {/*        <div className="form-row">*/}
                {/*            <div className="col">*/}
                {/*                <input type="text"*/}
                {/*                        name="First-Name" className="form-control" placeholder="First Name"*/}
                {/*                       required/>*/}
                {/*            </div>*/}
                {/*            <div className="col">*/}
                {/*                <input type="text" name="Last-Name" className="form-control" placeholder="Last Name"*/}
                {/*                       required/>*/}
                {/*            </div>*/}
                {/*            <div className="col">*/}
                {/*                <input type="text" name="Phone" className="form-control" placeholder="Phone number"*/}
                {/*                       required/>*/}
                {/*            </div>*/}
                {/*            <div className="col">*/}
                {/*                <input type="email" name="Email" className="form-control" placeholder="Email Address"*/}
                {/*                       required/>*/}
                {/*            </div>*/}
                {/*            <div className="col">*/}
                {/*                <input type="text" name="Delivery" className="form-control" placeholder="Delivery address" required/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <fieldset>*/}
                {/*        <div className="form-wrp-pay-card">*/}
                {/*            <legend>Payment method</legend>*/}
                {/*            <input type="hidden" name="_subject" value="Ваш заказ №2312"></input>*/}
                {/*            <input type="hidden" name="_template" value="table"></input>*/}
                {/*            <input type="checkbox" name="pay-card" value="pay-card" id="pay-card"/>*/}
                {/*            <label htmlFor="pay-card">Pay with a card</label>*/}
                {/*        </div>*/}
                {/*        <div className="form-wrp-pay-cash">*/}
                {/*            <input type="checkbox" name="pay-cash" id="pay-cash" value="pay-cash"/>*/}
                {/*            <label htmlFor="pay-cash">Cash/ card upon receipt</label>*/}
                {/*        </div>*/}
                {/*    </fieldset>*/}
                {/*    <button type="submit" onClick={getOrder} className="btn btn-lg btn-dark btn-block">Payment order</button>*/}
                {/*    <button className="btn btn-lg btn-dark btn-block">Cancel</button>*/}
                {/*</form>*/}
            </div>
        </>
    );
};

export default Form;
