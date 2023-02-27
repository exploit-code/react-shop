import { Link } from 'react-router-dom';
import './header.scss'
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import emailIcon from '../../images/emailIcon.png';
import fbIcon from '../../images/fbIcon.svg';
import waIcon from '../../images/waIcon.svg';
import inIcon from '../../images/inIcon.svg';
import twitIcon from '../../images/twitIcon.svg';
import loginIcon from '../../images/loginIcon.svg'

import cartIcon from '../../images/cart-icon.svg'
import likesIcon from '../../images/likes-icon.svg'

import ScrollToTop from '../../utils/scrollToTop';
import { useSelector } from "react-redux";
import SearchTop from "../SearchTop/SearchTop";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const cartItems = useSelector((state) => state.cart.products)
    const favoritesItems = useSelector((state) => state.favorites.products)

    const handleSignOut = () => {
        logOut()
        .then(() => { })
        .catch(error => console.error(error));
    }

    const totalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    const totalQuantity = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };

  const totalQuantityFavorites = () => {
    let total = 0;
    favoritesItems.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

    return (
      <header className='header'>
        <ScrollToTop />
        <div className='header__box header__box--black'>
          <div className='header__content container'>
            <div className='header__fx'>
              <Link className='header__email' to='#'>
                <img className='header__email-icon' src={emailIcon} alt='' />
                <span className='header__email-text'>Hello@colorlib.com</span>
              </Link>

              <div className='header__line'></div>

              <span className='header__delivery'>
                Free Shipping for all order of $99
              </span>
            </div>

            <div className='header__fx'>
              <div className='header__socnet'>
                <Link to='/'>
                  <img src={fbIcon} alt='' />
                </Link>
                <Link to='/'>
                  <img src={twitIcon} alt='' />
                </Link>
                <Link to='/'>
                  <img src={waIcon} alt='' />
                </Link>
                <Link to='/'>
                  <img src={inIcon} alt='' />
                </Link>
              </div>

              <div className='header__line'></div>

              <div className='header__login'>
                <img className='header__login-icon' src={loginIcon} alt='' />
                {user?.email ? (
                  <Link className='header__login-text' onClick={handleSignOut}>
                    Log Out
                  </Link>
                ) : (
                  <Link className='header__login-text' to='/login'>
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='header__box header__box--white'>
          <div className='header__content container'>
            <Link className='header__logo' to='/'>
              GOOD-FOOD🍎🥝
            </Link>

            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to='/'>
                    HOME
                  </Link>
                </li>
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to='/products/1'>
                    SHOP
                  </Link>
                </li>
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to='/'>
                    BLOG
                  </Link>
                </li>
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to='/contacts'>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>

            <div className='header__info'>
              <div className='header__info-likes'>
                <Link to='/favorites'>
                  <img
                    className='header__info-icon'
                    src={likesIcon}
                    alt='favorites'
                  />
                  <span className='header__info-count'>{totalQuantityFavorites()}</span>
                </Link>
              </div>

              <div className='header__info-cart'>
                <Link to='/cart'>
                  <img
                    className='header__info-icon'
                    src={cartIcon}
                    alt='cart'
                  />
                  <span className='header__info-count'>{totalQuantity()}</span>
                </Link>
              </div>

              <div className='header__info-price'>
                <span className='header__info-price-text'>Price:</span>
                <span className='header__info-price-value'>
                  ${totalPrice()}
                </span>
              </div>
            </div>
          </div>
        </div>
          <SearchTop/>
      </header>
    )
}

export default Header;
