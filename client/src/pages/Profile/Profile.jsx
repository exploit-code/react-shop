
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import { getAuth, deleteUser, sendPasswordResetEmail, updateProfile, updateEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './Profile.scss';
import useFetch from "../../hooks/useFetch";
import LeftSideProfile from '../../components/LeftSideProfile/LeftSideProfile'

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [customName, setCustomName] = useState(user.displayName);
  const [customEmail, setCustomEmail] = useState(user.email);

  const avatarName = user.displayName?.slice(0, 2);

  //
  const { data } = useFetch(
    `/orders?filters[mail][$eq]=${user.email}`
  );
  // console.log(data, 'History of Orders')
  //

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error(error));
  }

  const deleteAccount = () => {
    const user = auth.currentUser;

    deleteUser(user).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }

  const [passMessage, setPassMessage] = useState('Change password');

  const changePassword = () => {
    const auth = getAuth();
    const email = auth.currentUser.email;
    setPassMessage('A password reset email has been sent to your email');

    setTimeout(() => {
      setPassMessage('Change password');
    }, 3000);

    sendPasswordResetEmail(auth, email)
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  }


  const upName = () => {
    updateProfile(auth.currentUser, {
      displayName: customName,
    }).then(() => {
      navigate('/profile');
    })
  }

  const upEmail = () => {
    updateEmail(auth.currentUser, customEmail).then(() => {
      navigate('/profile');
    }).catch(() => {
      handleSignOut();
    })
  }

  return (
    <div className='grid'>
      <div className='grid__box'>
        <LeftSideProfile avatarName={avatarName} />
      </div>

      <div className='grid__box'>
        <section className='profile'>
          <div id='profileInfo'></div>
          <h1 className='profile__title'>Profile</h1>
          <p className='profile__id'>
            <span className='profile__id-text'>Your client ID is:</span>
            <span className='profile__id-data'>{user.uid}</span>
          </p>
        </section>

        <section className='data'>
          <h3 className='data__title'>Personal data</h3>

          <div className='data__box'>
            <p className='data__item'>
              <span className='data__item-text'>Name:</span>
              <span className='data__item-data'>
                {user.displayName}
              </span>
            </p>
            <p className='data__item'>
              <span className='data__item-text'>Email:</span>
              <span className='data__item-data'>{user?.email}</span>
            </p>
          </div>
        </section>

        <section className='discount'>
          <h3 className='discount__title'>Discount cards</h3>

          <div className='discount__cards'>
            <div className='discount__card discount__card--black'>
              <div className='discount__card-box discount__card-box--header'>
                <p className='discount__card-logo'>GOOD-FOOD🍎🥝</p>
              </div>
              <div className='discount__card-box discount__card-box--footer'>
                <p className='discount__card-number'>3825696580120222456</p>
              </div>
            </div>

            <div className='discount__card discount__card--white'>
              <div className='discount__card-box discount__card-box--header'>
                <p className='discount__card-logo'>GOOD-FOOD🍎🥝</p>
              </div>
              <div className='discount__card-box discount__card-box--footer'>
                <p className='discount__card-number'>3825696580120222456</p>
              </div>
            </div>
          </div>
        </section>

        <section className='actions'>
          <h3 className='actions__title'>Account actions</h3>
          <ul className='actions__list'>



            <section className='edit-data'>
              <div className='edit-data__item'>
                <input className='edit-data__input' type="text"
                  onChange={(e) => setCustomName(e.target.value)} required />
                <button className='edit-data__btn' type='submit' onClick={upName}>edit name</button>
              </div>

              <div className='edit-data__item'>
                <input className='edit-data__input' type="email"
                  onChange={(e) => setCustomEmail(e.target.value)} required />
                <button className='edit-data__btn' type='submit' onClick={upEmail}>edit email</button>
              </div>
            </section>




            <li className='actions__link' onClick={changePassword}>
              {passMessage}
            </li>
            <li className='actions__link' onClick={handleSignOut}>
              Sing Out
            </li>
            <li
              className='actions__link actions__link--red'
              onClick={deleteAccount}
            >
              Delete account
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Profile;
