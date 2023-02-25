import React from 'react';
import { Link } from 'react-router-dom';
import './cart-style.scss';
import cartPng from './img/cart.png'
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItems, deleteItem } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

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
      <div className="page-cart-wrp">
        <div className="cart">
          <header className='head-cart-wrp'>
            <h3 className='head-cart-title'>
              My Cart
            </h3>
          </header>
          {cartItems.length > 0 ? (
            <div className='cart-products-wrp'>
              <section className='cart-products'>
                {cartItems.map((item, idx) => (
                  <div key={idx} className='cart-product-total'>
                    <Link to={`/productpage/${item.id}`} className="cart-items-wrp">
                      <div className='overlay'>
                        <img className='cart-item-img' src={process.env.REACT_APP_UPLOAD_URL + item.img}
                             alt={item.title}/>
                      </div>
                      <div className='cart-item'>
                        <h4 className='cart-item-title'>
                          {item.title}
                        </h4>
                        <p className='cart-item-txt'>${item.price}</p>
                      </div>
                    </Link>
                    <div className='cart-total'>
                      <div className='cart-total-info'>
                        <h3 className='cart-total-title'>${item.totalPriceItem}</h3>
                        <button onClick={() => dispatch(deleteItem(item))} className='cart-total-count-btn'>-</button>
                        <span className='cart-total-txt'>{item.quantity}</span>
                        <button onClick={() => dispatch(addItem(item))} className='cart-total-count-btn'>+</button>
                      </div>
                      <div>
                        <button className='cart-total-remove-btn'
                                onClick={() => dispatch(removeItems(item))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
              <div className='cart-btn-wrp'>
                <button className='cart-btn'>
                  <span className='cart-btn-txt' onClick={checkoutPayment}>GO to checkout</span>
                </button>
              </div>
            </div>
                    ) : (
            <div className='cart-empty-container'>
              <div className='cart-empty-wrp'>
                <img src={cartPng} alt="cart-img"/>
                <h4 className='cart-title'>IS EMPTY</h4>
                <p className='cart-txt'>Add something to order</p>
                <Link to="/">
                  <button className='cart-btn'>
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

export default Cart;
