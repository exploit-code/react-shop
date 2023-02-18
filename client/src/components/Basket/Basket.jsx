import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/UserContext";
import './basket-style.scss';
import Raspberry from './img/raspberry.png'
import BasketPng from './img/basket.png'
import useFetch from "../../hooks/useFetch";
import {useSelector} from "react-redux";
import {makeRequest} from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";


const Basket = () => {
    const { cartItems } = useContext(AuthContext)

    const totalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += cartItems.slice(-1).length * item.attributes.price;
        });
        return total.toFixed(2);
    };
    const stripePromise = loadStripe(
        "pk_test_51MS8CGDhtufCoDjnZyf7MYjgOOjpS7OPMLd0RRfnO5xTJjNotjTNT4xB5N9V72Znd5CnXxrThvAHQVtwdIAyHuOF00Mh08hlMX"
    );
    const handlePayment = async () => {
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

console.log(cartItems)
    const { data } = useFetch(
      `/products?populate=*`
    );
    return (
        <>
            <div className="page-basket-wrp">
                <div className="basket">
                    <header className='head-basket-wrp'>
                        <h3 className='head-basket-title'>
                            My Cart
                        </h3>
                        <div className='head-basket-txt'>
                            <p className='head-basket-txt_2'>Total Price: $<span>{totalPrice()}</span></p>
                        </div>
                    </header>
                    {cartItems.length > 0 ? (
                        <div className='bskt-products-wrp'>
                            <section className='basket-products'>
                                {cartItems.map((item, index) => (
                                    <div key={index} className="basket-items-wrp">
                                        <img width={110} height={110} src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt={item.attributes.title} />
                                        <div className='basket-item'>
                                            <h4 className='basket-item-title'>
                                                {item.attributes.title}
                                            </h4>
                                            <p className='basket-item-txt'>${item.attributes.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </section>
                            <div className='basket-btn-wrp'>
                                <button className='basket-btn'  onClick={handlePayment} >
                                    <span className='basket-btn-txt'>GO to checkout</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className='basket-empty-container'>
                            <div className='basket-empty-wrp'>
                                <img src={BasketPng} alt="basket-img" />
                                <h4 className='bskt-title'>IS EMPTY</h4>
                                <p className='bskt-txt'>Add something to order</p>
                                <Link to="/">
                                    <button className='bskt-empty-btn'>
                                        SHOP NOW
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default Basket;
