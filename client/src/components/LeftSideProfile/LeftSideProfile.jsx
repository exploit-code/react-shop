import './LeftSideProfile.scss'
import React from 'react'
import { getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'


const LeftSideProfile = ({ avatarName }) => {

  let profilePageIsCheck;
  let histiryOfOrdersPageIsCheck;
  let favoritesPageIsCheck;

  if (document.location.pathname === '/profile') {
    profilePageIsCheck = true;
  } else {
    profilePageIsCheck = false;
  }

  if (document.location.pathname === '/historyOfOrders') {
    histiryOfOrdersPageIsCheck = true;
  } else {
    histiryOfOrdersPageIsCheck = false;
  }

  if (document.location.pathname === '/favorites') {
    favoritesPageIsCheck = true;
  } else {
    favoritesPageIsCheck = false;
  }

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
            {
              profilePageIsCheck ?
                <a className='navLeftSideProfile__link' href='#profileInfo'>Profile info</a>
                :
                (
                  <Link className='navLeftSideProfile__link' to='/profile'>
                    Profile page
                  </Link>
                )
            }
          </li>
          <li className='navLeftSideProfile__item firstLinkProfile'>
            <div className='navLeftSideProfile_line'></div>
            {
              histiryOfOrdersPageIsCheck ?
                <a className='navLeftSideProfile__link' href='#historyOfOrdersInfo'>History of orders info</a>
                :
                (
                  <Link className='navLeftSideProfile__link' to='/historyOfOrders'>
                    History of orders
                  </Link>
                )
            }
          </li>
          <li className='navLeftSideProfile__item'>
            <div className='navLeftSideProfile_line'></div>
            {
              favoritesPageIsCheck ?
                <a className='navLeftSideProfile__link' href='#favoritesInfo'>Favorites info</a>
                :
                (
                  <Link className='navLeftSideProfile__link' to='/favorites'>
                    Favorites
                  </Link>
                )
            }
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
