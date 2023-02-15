import React, { useContext } from 'react';
import { AuthContext} from "../../context/UserContext";
import './basket-style.scss';
import Raspberry from './img/raspberry.png'
import BasketPng from './img/basket.png'

const Basket = () => {
    const { cartItems } = useContext(AuthContext)
    return (
        <>
            <main className="page-basket-wrp">
                <div className="basket">
                    <header className='head-basket-wrp'>
                        <h3>
                            My Cart
                        </h3>
                        <div>
                            <p>Total Price: $<span>333.00</span></p>
                        </div>
                    </header>
                    <section className='basket-products'>
                        {cartItems.map((obj, index) => (
                          <div key={index} className="basket-items-wrp">
                              <img width={110} height={110} src={obj.imageUrl} alt={obj.title}/>
                              <div className='basket-item'>
                                  <h4 className='basket-item-title'>
                                      {obj.title}
                                  </h4>
                                  <p className='basket-item-txt'>${obj.price}</p>
                              </div>
                          </div>
                        ))}
                    </section>
                    <div className='basket-btn-wrp'>
                        <button className='basket-btn'>
                            <span className='basket-btn-txt'>GO to checkout</span>
                        </button>
                    </div>
                    <div className='basket-empty-container'>
                        <div className='basket-empty-wrp'>
                            <img src={BasketPng} alt="basket-img" />
                            <h4 className='bskt-title'>IS EMPTY</h4>
                            <p className='bskt-txt'>Add something to order</p>
                            <button className='bskt-empty-btn'>
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Basket;