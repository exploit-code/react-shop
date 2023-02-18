import { Link } from 'react-router-dom';
import './header.scss'
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { useState } from 'react';
import emailIcon from '../../images/emailIcon.png';
import fbIcon from '../../images/fbIcon.svg';
import waIcon from '../../images/waIcon.svg';
import inIcon from '../../images/inIcon.svg';
import twitIcon from '../../images/twitIcon.svg';
import engIcon from '../../images/engIcon.svg';
import rusIcon from '../../images/rusIcon.svg';
import loginIcon from '../../images/loginIcon.svg'

import basketIcon from '../../images/basket-icon.svg'
import likesIcon from '../../images/likes-icon.svg'

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

            {/* <div className='header__content header__content--sup'>
                <div className='container'>
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
                </div>

            <div className='header__content header__content--sub'>

                <Link className='header__logo' to='/'>LOGO🍎🥝</Link>

                <nav className='header__nav'>
                    <ul className='header__nav-list'>
                        <li className='header__nav-item'>
                            <Link className='header__nav-link' to='/'>HOME</Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link className='header__nav-link' to='/'>SHOP</Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link className='header__nav-link' to='/'>PAGES</Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link className='header__nav-link' to='/'>BLOG</Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link className='header__nav-link' to='/'>CONTACT</Link>
                        </li>
                    </ul>
                </nav>

                <div className='header-info'>
                    <div className='header-info__likes'></div>
                    <div className='header-info__basket'></div>
                    <div className='header-info__price'>
                        <span className='header-info__price-text'>Price</span>
                        <span className='header-info__price-value'>$150.00</span>
                    </div>
                </div>
            </div> */}


            <div className='header__box header__box--black'>
                <div className='header__content container'>

                    <div className='header__fx'>
                        <Link className='header__email' to='#'>
                            <img className='header__email-icon' src={emailIcon} alt="" />
                            <span className='header__email-text'>Hello@colorlib.com</span>
                        </Link>

                        <div className='header__line'></div>

                        <span className='header__delivery'>Free Shipping for all order of $99</span>
                    </div>



                    <div className='header__fx'>
                        <div className='header__socnet'>
                            <Link to='/'>
                                <img src={fbIcon} alt="" />
                            </Link>
                            <Link to='/'>
                                <img src={twitIcon} alt="" />
                            </Link>
                            <Link to='/'>
                                <img src={waIcon} alt="" />
                            </Link>
                            <Link to='/'>
                                <img src={inIcon} alt="" />
                            </Link>
                        </div>

                        <div className='header__line'></div>

                            <div className='header__login'>
                                <img className='header__login-icon' src={loginIcon} alt="" />
                                {user?.email ? <Link className='header__login-text' onClick={handleSignOut}>Log Out</Link> : <Link className='header__login-text' to='/login'>Login</Link>}
                            </div> 

                    </div>

                </div>
            </div>

            <div className='header__box header__box--white'>
                <div className='header__content container'>

                    <Link className='header__logo' to='/'>LOGO🍎🥝</Link>

                    <nav className='header__nav'>
                        <ul className='header__nav-list'>
                            <li className='header__nav-item'>
                                <Link className='header__nav-link' to='/'>HOME</Link>
                            </li>
                            <li className='header__nav-item'>
                                <Link className='header__nav-link' to='/products/1'>SHOP</Link>
                            </li>
                            <li className='header__nav-item'>
                                <Link className='header__nav-link' to='/'>PAGES</Link>
                            </li>
                            <li className='header__nav-item'>
                                <Link className='header__nav-link' to='/'>BLOG</Link>
                            </li>
                            <li className='header__nav-item'>
                                <Link className='header__nav-link' to='/'>CONTACT</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className='header__info'>
                        <div className='header__info-likes'>
                            <Link to='/likes'>
                                <img className='header__info-icon' src={likesIcon} alt="likes" />
                                <span className='header__info-count'>0</span>
                            </Link>
                        </div>

                        <div className='header__info-basket'>
                            <Link to='/basket'>
                                <img className='header__info-icon' src={basketIcon} alt="basket" />
                                <span className='header__info-count'>0</span>
                            </Link>
                        </div>

                        <div className='header__info-price'>
                            <span className='header__info-price-text'>Price:</span>
                            <span className='header__info-price-value'>$150.00</span>
                        </div>
                    </div>
                </div>
            </div>



        </header >
    )
}

export default Header;
