import React from 'react';
import { Link } from 'react-router-dom';
import './basket-style.scss';
import BasketPng from './img/basket.png'
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItems, deleteItem } from "../../redux/cartReducer";


const Basket = () => {
  const cartItems = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

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
                           src={process.env.REACT_APP_UPLOAD_URL + item.img} alt={item.tittle}/>
                      <div className='basket-item'>
                        <h4 className='basket-item-title'>
                          {item.title}
                        </h4>
                        <p className='basket-item-txt'>${item.price}</p>
                      </div>
                    </div>
                    <div className='basket-total'>
                      <div className='basket-total-info'>
                        <h3 className='basket-total-title'>${(item.quantity * item.price).toFixed(2)}</h3>
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
