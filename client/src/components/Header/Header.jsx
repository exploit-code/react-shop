import { Link } from 'react-router-dom';
import './header.scss'
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import './header.scss';
import { useState } from 'react';
import loginIcon from '../../images/loginIcon.svg';
import emailIcon from '../../images/emailIcon.png';
import fbIcon from '../../images/fbIcon.svg';
import waIcon from '../../images/waIcon.svg';
import inIcon from '../../images/inIcon.svg';
import twitIcon from '../../images/twitIcon.svg';
import engIcon from '../../images/engIcon.svg';
import rusIcon from '../../images/rusIcon.svg';




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
                <Link className='header__link' to='/'>Home</Link>
                <Link className='header__link' to='/basket'>Basket</Link>
                {
                    user?.email ? <Link className='header__link' onClick={handleSignOut}>Log Out</Link> : <Link className='header__link' to='/login'>Login</Link>
                }
            </div>
        </header >
    )
}

export default Header;
