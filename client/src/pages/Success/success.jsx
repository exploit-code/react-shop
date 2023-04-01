import React, { useContext, useEffect } from 'react'
import './success.scss'
import success from "../Success/img/success.png";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/UserContext";
import { useDispatch } from "react-redux";
import { resetPromo, resetCart, togglePromo} from "../../redux/cartReducer";


const Success = () => {
    const dispatch = useDispatch()
    const { user } = useContext(AuthContext);
    const handleDeleteCart = () => {
        dispatch(resetCart())
        dispatch(resetPromo())
        dispatch(togglePromo(true))
    }

    useEffect(() => {
        handleDeleteCart()
    }, [])

    return (
        <div className='cart-empty-container'>
            <div className='cart-empty-wrp'>
                <img src={success} width='180px' alt="cart-img" />
                <h4 className='cart-title'>SUCCESS!</h4>
                <p className='cart-txt'> Thank's, <b>{user?.displayName}</b>, Your Food is coming!</p>
                <Link to="/">
                    <button className='cart-btn'>
                        Back to Main Page
                    </button>
                </Link>
            </div>
        </div>
    )
};
export default Success;
