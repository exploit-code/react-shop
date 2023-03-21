import React, { useContext, useState } from 'react';
import { useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

import { AuthContext } from '../../context/UserContext';
import ScrollToTop from '../../utils/scrollToTop';
import SearchTop from "../SearchTop/SearchTop";
import DropDownUserMenu from "../DropDownUserMenu/DropDownUserMenu";

import emailIcon from '../../images/emailIcon.png';
import loginIcon from '../../images/loginIcon.svg'
import cartIcon from '../../images/cart-icon.svg'
import likesIcon from '../../images/likes-icon.svg'

import './header.scss'


const Header = () => {
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.products)
  const favoritesItems = useSelector((state) => state.favorites.products)
  const [categoryId, setCategoryId] = useState(1)
  const [visibleList, setvisibleList] = useState(false)


  // const handleSignOut = () => {
  //   logOut()
  //   .then(() => {
  //     navigate('/');
  //   })
  //   .catch(error => console.error(error));
  // }

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

  const takeCategoryId = (value) => {
    setCategoryId(value)
  }

  const categoriesClick = () => {
    setvisibleList((visible) => !visible)
  }

  return (
    <header className='header' id='header'>
      <ScrollToTop/>
      <div className='header__box header__box--black'>
        <div className='header__content container'>
          <div className='header__fx'>
            <Link target='blank' className='header__email' to='#'>
              <img className='header__email-icon' src={emailIcon} alt=''/>
              <span className='header__email-text'>good.food23@mail.ru</span>
            </Link>

            <div className='header__line'></div>

            <span className='header__delivery'>
              Free Shipping for all order of $99
            </span>
          </div>

          <div className='header__fx'>
            <address className='header__social_buttons_box'>
              <div className='social_button'>
                <Link
                  target='blank'
                  to='https://vk.com/club219140677'
                  className='social_link'
                >
                  <i className='fa-brands fa-vk fa-lg'></i>
                </Link>
              </div>
              <div className='social_button'>
                <Link
                  target='blank'
                  to='https://t.me/good_food_chanal'
                  className='social_link'
                >
                  <i className='fa-brands fa-telegram fa-lg'></i>
                </Link>
              </div>
              <div className='social_button'>
                <Link
                  target='blank'
                  to='https://chat.whatsapp.com/J7A58kQEO1679axpbCMoR6'
                  className='social_link'
                >
                  <i className='fa-brands fa-whatsapp fa-lg'></i>
                </Link>
              </div>
            </address>

            <div className='header__line'>
              {visibleList && <DropDownUserMenu categoriesClick={categoriesClick}/>}
            </div>

            <div className='header__login'>

              {user?.email ? (
                <div>
                  <div style={{ cursor: 'pointer' }} onClick={categoriesClick}>
                    <img className='header__login-icon' src={loginIcon} alt='profile-icon'/>
                  </div>
                </div>

              ) : (

                <Link className='header__login-text' to='/login'>
                  <img className='header__login-icon' src={loginIcon} alt='profile-icon'/>
                </ Link>
              )}


              {/*<div className='header__line'></div>*/}

              {user?.email ? (
                <div className='header__login-text' style={{ cursor: 'pointer' }} onClick={categoriesClick}>
                  {user.displayName == null ? `${user?.email}` : user.displayName}
                </div>
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
          <CustomLink className='header__logo' to='/'>
            GOOD-FOOD🍎🥝
          </CustomLink>

          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item'>
                <CustomLink className='header__nav-link' to='/'>
                  HOME
                </CustomLink>
              </li>
              <li className='header__nav-item'>
                <CustomLink
                  className='header__nav-link'
                  to={`/products/${categoryId}`}
                >
                  PRODUCTS
                </CustomLink>
              </li>
              <li className='header__nav-item'>
                <CustomLink className='header__nav-link' to='/categories'>
                  CATEGORIES
                </CustomLink>
              </li>
              <li className='header__nav-item'>
                <CustomLink className='header__nav-link' to='/blog'>
                  BLOG
                </CustomLink>
              </li>
              <li className='header__nav-item'>
                <CustomLink className='header__nav-link' to='/contacts'>
                  CONTACT
                </CustomLink>
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
                <span className='header__info-count'>
                  {totalQuantityFavorites()}
                </span>
              </Link>
            </div>

            <div className='header__info-cart'>
              <Link to='/cart'>
                <img className='header__info-icon' src={cartIcon} alt='cart' />
                <span className='header__info-count'>{totalQuantity()}</span>
              </Link>
            </div>

            <div className='header__info-price'>
              <span className='header__info-price-text'>Price:</span>
              <span className='header__info-price-value'>${totalPrice()}</span>
            </div>
          </div>
        </div>
      </div>
      <SearchTop takeCategoryId={takeCategoryId} />
    </header>
  )
}

export default Header;
