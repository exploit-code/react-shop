import React from "react"
import './style-form.scss'
import { useSelector } from "react-redux";
import axios from "axios";


const Form = () => {
    const cartItems = useSelector((state) => state.cart.products)

    const getOrder = () => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/9264549700@mail.ru', {
            name: "FormSubmit",
            message: "I'm from Devro LABS",
            data: JSON.stringify(cartItems)
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    // const orderItems = (cartItems) => {
    //     const txt = document.querySelector('.form-order');
    //     cartItems.map((item) => txt.appendChild(document.createTextNode(item.title.join(', '))));
    //     // Хотел пройтись по массиву и запушить данные в элемент html в ввиде строки.
    //     return txt;
    // }

    return (
        <>
            <div className="form-wrp">
                <h1>Form of the order</h1>
                <button type="submit" onClick={getOrder} className="btn btn-lg btn-dark btn-block">Payment order</button>
                {/*<form target="_blank" action='https://formsubmit.co/9264549700@mail.ru' method="POST">*/}
                {/*    <div className="form-group">*/}
                {/*        <div className="form-row">*/}
                {/*            <div className="col">*/}
                {/*                <input type="text" name="First-Name" className="form-control" placeholder="First Name"*/}
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
                {/*                <input type="text" name="Delivery" className="form-control"*/}
                {/*                       placeholder="Delivery address" required/>*/}
                {/*            </div>*/}
                {/*            /!*<div type="Order">*!/*/}
                {/*            /!*    /!* <textarea className="form-order" name="Order" id="Order" cols="30" rows="10"> *!/*!/*/}
                {/*            /!*    /!* Orders ....*!/*/}
                {/*            /!*        Сюда нужно попробовать закинуть данные из cartitems*!/*/}
                {/*            /!*        *!/*!/*/}
                {/*            /!*    /!* </textarea> *!/*!/*/}
                {/*            /!*    /!* {cartItems.map((item, index) => (*!/*/}
                {/*            /!*        <ul key={index}>*!/*/}
                {/*            /!*            <li>{item.title}</li>*!/*/}
                {/*            /!*            <h4>{item.totalPriceItem}</h4>*!/*/}
                {/*            /!*        </ul>*!/*/}
                {/*            /!*    ))} *!/*!/*/}
                {/*            /!*</div>*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <fieldset>*/}
                {/*        <div className="form-wrp-pay-card">*/}
                {/*            <legend>Payment method</legend>*/}
                {/*            <input type="hidden" name="_subject" value="Ваш заказ №2312"></input>*/}
                {/*            /!*<input type="hidden" name="_subject" value={orderItems}></input>*!/*/}
                {/*            <input type="hidden" name="_template" value="table"></input>*/}
                {/*            <input type="checkbox" name="pay-card" value="pay-card" id="pay-card"/>*/}
                {/*            <label htmlFor="pay-card">Pay with a card</label>*/}
                {/*        </div>*/}
                {/*        <div className="form-wrp-pay-cash">*/}
                {/*            <input type="checkbox" name="pay-cash" id="pay-cash" value="pay-cash"/>*/}
                {/*            <label htmlFor="pay-cash">Cash/ card upon receipt</label>*/}
                {/*        </div>*/}
                {/*    </fieldset>*/}
                {/*    /!* <div class="form-group">*/}
                {/*        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>*/}
                {/*    </div> *!/*/}
                {/*    <button type="submit" onClick={getOrder} className="btn btn-lg btn-dark btn-block">Payment order*/}
                {/*    </button>*/}
                {/*    <button className="btn btn-lg btn-dark btn-block">Cancel</button>*/}
                {/*</form>*/}
            </div>
        </>
    );
};

export default Form;
