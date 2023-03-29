import './LeftSideProfile.scss'
import React from 'react'
import { getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'


const LeftSideProfile = ({ avatarName }) => {

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <aside className='asideLeftSideProfile'>
      <div className='cardLeftSideProfile'>
        <div className='cardLeftSideProfile__avatar'>
          {avatarName}
        </div>
        <p className='cardLeftSideProfile__name'>
          <span>Hello</span>
          <span className='cardLeftSideProfile__userName'>{user?.displayName == null ? `${user?.email}` : user?.displayName}</span>
        </p>
        <p className='cardLeftSideProfile__email'>{user?.email}</p>
      </div>

      <nav className='navLeftSideProfile'>
        <ul className='navLeftSideProfile__list'>
          <li className='navLeftSideProfile__item firstLinkProfile'>
            <div className='navLeftSideProfile_line'></div>
            <Link className='navLeftSideProfile__link' to='/profile'>
              Profile
            </Link>
          </li>
          <li className='navLeftSideProfile__item firstLinkProfile'>
            <div className='navLeftSideProfile_line'></div>
            <Link className='navLeftSideProfile__link' to='/historyOfOrders'>
              History of orders
            </Link>
          </li>
          <li className='navLeftSideProfile__item'>
            <div className='navLeftSideProfile_line'></div>
            <Link className='navLeftSideProfile__link' to='/favorites'>
              Favorites
            </Link>
          </li>
          <li className='navLeftSideProfile__item'>
            <div className='navLeftSideProfile_line'></div>
            <Link className='navLeftSideProfile__link'>Promo codes</Link>
          </li>
          <li className='navLeftSideProfile__item'>
            <div className='navLeftSideProfile_line'></div>
            <Link className='navLeftSideProfile__link'>Certificates</Link>
          </li>
          <li className='navLeftSideProfile__item'>
            <div className='navLeftSideProfile_line'></div>
            <Link className='navLeftSideProfile__link'>Reviews</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default LeftSideProfile
