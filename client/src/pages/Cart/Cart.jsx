import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './cart-style.scss';
import cartPng from './img/cart.png'
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItems, deleteItem, setPromo, addPromo, resetPromo } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { AuthContext } from "../../context/UserContext";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products)
  const promo = useSelector((state) => state.cart.promoCode)
  const dispatch = useDispatch()

  const stripePromise = loadStripe("pk_test_51MS8CGDhtufCoDjnZyf7MYjgOOjpS7OPMLd0RRfnO5xTJjNotjTNT4xB5N9V72Znd5CnXxrThvAHQVtwdIAyHuOF00Mh08hlMX");
  const { user } = useContext(AuthContext);

  const [promoCodes, setPromoCodes] = useState([])
  const [promoValue, setPromoValue] = useState('')

  const addPromoCode = () => (
    cartItems.forEach((item) => {
      dispatch(addPromo({ id: item.id, value: promoValue }))
    })
  )

  const handlerChangePromoInput = (event) => {
    event.preventDefault();
    setPromoCodes([...promoCodes, promoValue]);
    (() => {
      return promoValue !== '' || null ? dispatch(setPromo(promoValue)) : ''
    })()
    addPromoCode();
    setPromoValue('')
  }

  // console.log('promoValue', promoValue)
  console.log('promo', promo)

  const checkoutPayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        cartItems,
        promo,
        mail: user?.email,
        firebaseId: user?.uid,
        payByCreditCard: 'OnlinePay',
        orderStatus: 'current'
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

  const onChangePromoInput = (event) => {
    setPromoValue(event.target.value)
  }

  // end of Checkout

  // const className = shopOrder ? 'flex' : 'hidden';

  // new code 05.03.

  // const payCard = (event) => {
  //   setValuePayMethod(event.target.value)
  // }

  // const clickPayCash = () => {
  //   setPayCash(() => !payCash)
  // }

  // const makeAnOrder = () => {
  //   if (payMethod == 'CC') {
  //     checkoutPayment()
  //   } else if (payMethod == 'CD') {
  //     clickPayCash()
  //   }
  // };

  const handleDeleteItem = (item) => {
    dispatch(removeItems(item))
    dispatch(resetPromo())
  }

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
                          alt={item.title} />
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
                                onClick={() => handleDeleteItem(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <form onSubmit={handlerChangePromoInput} className='login'>
                  <h3
                    className='login__title'>{promo.find((item) => item === promoValue) ? 'Invalid promo code!' : 'Do you have a promo code?'}</h3>
                  <input
                    onChange={(event) => onChangePromoInput(event)}
                    value={promoValue}
                    className='login__input'
                    type="text"
                    placeholder="Your secret phrase..."
                  />
                  {promo.find((item) => item === promoValue) ? (
                    <button disabled className='login__btn disabled'> I want a discount!!! </button>
                  ) : (
                    <button className='login__btn '> I want a discount!!! </button>
                  )}
                </form>
              </section>

              <div className='testModal cart-btn-wrp'>
                <ModalWindow checkoutPayment={checkoutPayment} promo={promo}  mail={user?.email}></ModalWindow>
              </div>

              {/* new code 05.03*/}

              {/* <fieldset>
                <legend>Choose your payment method</legend>
                <input type="radio" id="pay-card" name="payment" value="CC" checked={payMethod == 'CC'}
                  onChange={payCard} />
                <label htmlFor="pay-card">Pay card</label>
                <br></br>
                <input type="radio" id="pay-cash" name="payment" value="CD" checked={payMethod == 'CD'}
                  onChange={payCard} />
                <label htmlFor="pay-cash">Pay cash</label>
              </fieldset> */}

              {/* <div className='cart-btn-wrp'>
                <button className='cart-btn' onClick={makeAnOrder}>
                  <span className='cart-btn-txt'>
                    Go to checkout
                  </span>
                </button>
              </div> */}
              {/* {payCash && <Form className={className} />} */}

            </div>
          ) : (
            <div className='cart-empty-container'>
              <div className='cart-empty-wrp'>
                <img src={cartPng} alt="cart-img" />
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
