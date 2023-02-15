import { Link } from 'react-router-dom';
import './header.scss'
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import './header.scss';
import { useState } from 'react';
import emailIcon from '../../images/emailIcon.png';
import fbIcon from '../../images/fbIcon.svg';
import waIcon from '../../images/waIcon.svg';
import inIcon from '../../images/inIcon.svg';
import twitIcon from '../../images/twitIcon.svg';
import engIcon from '../../images/engIcon.svg';
import rusIcon from '../../images/rusIcon.svg';
import loginIcon from '../../images/loginIcon.svg'

const Header = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [select, setSelect] = useState('eng');

    const selectLang = (e) => {
        if (e === 'rus') {
            setSelect('rus')
        }
        else {
            setSelect('eng')
        }
    }

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <header className='header'>
            <div className='header__content container'>
                <div className='header__content_left'>
                    <div className='header__content_left_email'>
                        <img src={emailIcon} alt="Login" />
                        <p className='header__content_left_p'>Hello@colorlib.com</p>
                    </div>
                    <div className='header__content_left_stick'></div>
                    <p className='header__content_left_p'>Free Shipping for all order of $99</p>
                </div>

                <div className='header__content_right'>
                    <div className='header__content_right_socnet'>
                        <a href='*' className='header__content_right_socnet_link'>
                            <img src={fbIcon} alt="Login" />
                        </a>
                        <a href='*' className='header__content_right_socnet_link'>
                            <img src={waIcon} alt="Login" />
                        </a>
                        <a href='*' className='header__content_right_socnet_link'>
                            <img src={inIcon} alt="Login" />
                        </a>
                        <a href='*' className='header__content_right_socnet_link'>
                            <img src={twitIcon} alt="Login" />
                        </a>
                    </div>
                    <div className='header__content_right_socnet'>
                        <div className='header__content_right_socnet_div_select'>
                            <img src={select === 'eng' ? engIcon : rusIcon} alt="Login" />
                            <select className='header__content_right_socnet_select' onChange={e => selectLang(e.target.value)}>
                                <option value="eng">English</option>
                                <option value="rus">Russian</option>
                            </select>
                        </div>
                        <div className='header__content_left_stick'></div>
                        {
                            user?.email ? <Link className='header-login' onClick={handleSignOut}>Log Out</Link> : <Link className='header-login' to='/login'><img src={loginIcon} alt="Login" />
                                <span className='header-login__text'>Login</span></Link>
                        }
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;
