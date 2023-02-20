import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/UserContext";
import './basket-style.scss';
import BasketPng from './img/basket.png'

const Basket = () => {
    const { cartItems } = useContext(AuthContext)
    const { deleteItems } = useContext(AuthContext)


    return (
        <>
            <div className="page-basket-wrp">
                <div className="basket">
                    <header className='head-basket-wrp'>
                        <h3 className='head-basket-title'>
                            My Cart
                        </h3>
                        <div className='head-basket-txt'>
                            <p className='head-basket-txt_2'>Total Price: $<span>333.00</span></p>
                        </div>
                    </header>
                    {cartItems.length > 0 ? (
                        <div className='bskt-products-wrp'>
                            <section className='basket-products'>
                                {cartItems.map((item, index) => (
                                    <div className='basket-product-total'>
                                        <div key={index} className="basket-items-wrp">
                                            <img width={110} height={110} src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt={item.attributes.title} />
                                            <div className='basket-item'>
                                                <h4 className='basket-item-title'>
                                                    {item.attributes.title}
                                                </h4>
                                                <p className='basket-item-txt'>${item.attributes.price}</p>
                                            </div>
                                        </div>
                                        <div className='basket-total'>
                                            <div className='basket-total-info'>
                                                <h3 className='basket-total-title'>$30</h3>
                                                <button className='basket-total-count-btn'>-</button>
                                                <span className='basket-total-txt'>Kol-vo</span>
                                                <button className='basket-total-count-btn'>+</button>
                                            </div>
                                            <div>
                                                <button className='basket-total-remove-btn' onClick={() => deleteItems(item.id)}>Remove</button>
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
