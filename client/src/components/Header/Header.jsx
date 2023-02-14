import { Link } from 'react-router-dom';
import './Header.scss'
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Header = () => {

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
        </header>
    );
};

export default Header;
