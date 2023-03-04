import './Favorite.scss';
import { useState } from 'react';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';


const Favorite = ({ isFavorite }) => {
  const { user } = useContext(AuthContext);
  const [activeState, setActiveState] = useState(false);
  const state = () => {
    setActiveState(!activeState);
  }

  const handlerActive = () => {
    if(!activeState && !isFavorite) {
      return 'like'
    } else {
      return 'like like--active'
    }
  }

  const handlerFavorite = () => {
    if(!user?.email) {
      return 'like like--disabled'
    } else {
      return handlerActive()
    }
  }

  return (
    <button className={handlerFavorite()}
            onClick={() => state()}>
      <svg className='like__icon' xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"
           fill="none" stroke="red" strokeWidth="2">
        <path
          d="M12.4071 2.76287L13.0298 3.25257L13.649 2.75856C14.8575 1.79437 16.3583 1.26758 17.9575 1.26758C19.8118 1.26758 21.536 1.97563 22.8259 3.25742C24.1009 4.55858 24.8002 6.27909 24.8002 8.12038C24.8002 9.93635 24.0944 11.6582 22.8026 12.9753L13.0004 22.703L3.20139 12.9486L3.2013 12.9485C1.9113 11.6647 1.2002 9.94881 1.2002 8.1051C1.2002 6.26167 1.91132 4.54547 3.20131 3.26161C4.49068 1.97837 6.22151 1.26758 8.08889 1.26758C9.66819 1.26758 11.1742 1.7932 12.4071 2.76287Z"/>
      </svg>
    </button>
  )
}

export default Favorite;