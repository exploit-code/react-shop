import React from 'react';
import { Link } from 'react-router-dom';
import './basket-style.scss';
import BasketPng from './img/basket.png'
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItems, deleteItem } from "../../redux/cartReducer";
import {makeRequest} from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Basket = () => {
  const cartItems = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
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

console.log(cartItems, "cartitems")

  return (
    <>
      <div className="page-basket-wrp">
        <div className="basket">
          <header className='head-basket-wrp'>
            <h3 className='head-basket-title'>
              My Cart
            </h3>
          </header>
          {cartItems.length > 0 ? (
            <div className='bskt-products-wrp'>
              <section className='basket-products'>
                {cartItems.map((item) => (
                  <div key={item.id} className='basket-product-total'>
                    <div className="basket-items-wrp">
                      <img width={110} height={110}
                           src={process.env.REACT_APP_UPLOAD_URL + item.img} alt={item.title}/>
                      <div className='basket-item'>
                        <h4 className='basket-item-title'>
                          {item.title}
                        </h4>
                        <p className='basket-item-txt'>${item.price}</p>
                      </div>
                    </div>
                    <div className='basket-total'>
                      <div className='basket-total-info'>
                        <h3 className='basket-total-title'>${totalPrice}</h3>
                        <button onClick={() => dispatch(deleteItem(item))} className='basket-total-count-btn'>-</button>
                        <span className='basket-total-txt'>{item.quantity}</span>
                        <button onClick={() => dispatch(addItem(item))} className='basket-total-count-btn'>+</button>
                      </div>
                      <div>
                        <button className='basket-total-remove-btn'
                                onClick={() => dispatch(removeItems(item))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
              <div className='basket-btn-wrp'>
                <button className='basket-btn'>
                  <span className='basket-btn-txt' onClick={checkoutPayment}>GO to checkout</span>
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
