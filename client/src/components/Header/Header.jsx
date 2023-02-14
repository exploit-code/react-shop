import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__content container'>
                <Link className='header__link' to='/'>Home</Link>
                <Link className='header__link' to='/basket'>Basket</Link>
                <Link className='header__link' to='/login'>Login</Link>
            </div>
        </header>
    );
};

export default Header;
