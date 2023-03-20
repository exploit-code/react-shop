import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/UserContext';

import './DropDownUserMenu.scss'


const DropDownUserMenu = ({ categoriesClick }) => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const avatarName = user?.displayName?.slice(0, 2);
  const emailName = user?.email?.slice(0, 2);

  const handleSignOut = () => {
    logOut()
    .then(() => {
      navigate('/');
    })
    .catch(error => console.error(error));
  }

  return (
    <div className='DropDownUserMenu' onMouseLeave={categoriesClick}>
      <ul className='DropDownUserMenu__items'>
        <li className='DropDownUserMenu__item'>
          <div>
            <div className='card__avatar'>
              {avatarName == null ? emailName : avatarName}
            </div>
          </div>
          <div className='DropDownUserMenu__item__userInfo'>
            <p>
              {user?.displayName == null
                ? `${user?.email?.split('@')[0]}`
                : user?.displayName}
            </p>
            <p>ID:{user?.uid?.slice(0, 6)}</p>
          </div>
        </li>
        <li className='DropDownUserMenu__item'>
          <Link className='DropDownUserMenu__item-link' to='/profile'>
            Profile
          </Link>
        </li>
        <li className='DropDownUserMenu__item'>
          <Link className='DropDownUserMenu__item-link' to='/historyOfOrders'>
            History of orders
          </Link>
        </li>
        <li className='DropDownUserMenu__item'>
          <Link className='DropDownUserMenu__item-link' to='/favorites'>
            Favorites
          </Link>
        </li>
        <li className='DropDownUserMenu__item'>
          <Link className='DropDownUserMenu__item-link' to='/profile'>
            Reviews
          </Link>
        </li>
        <li className='DropDownUserMenu__item'>
          <Link className='DropDownUserMenu__item-link' to='/profile'>
            Promo codes
          </Link>
        </li>
        <li className='DropDownUserMenu__item'>
          <Link
            to='/'
            className='DropDownUserMenu__item-link'
            onClick={handleSignOut}
          >
            Exit{' '}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DropDownUserMenu