import './footer.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";

const Footer = () => {
    const navigate = useNavigate();
    ///new
    const [email, setEmail] = useState('');
    const [mailValid, setMailValid] = useState(false)
    const [mailError, setEmailError] = useState('Email не может быть пустым')
    // Валидация полей формы (email, firstName, secondName, deliveryAdress)
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email должен содержать @domen.ru')
        } else {
            setEmailError('')
        }
    }

    /////////
    function handleSubmit(event) {
        event.preventDefault();
    }

    //START of getForm
    function getForm(event) {
        event.preventDefault()
        let body = {
            data: {
                fullName: 'SUBSCRIBER',
                mail: email,
                message: 'SUBSCRIBER',
            },
        }
        fetch(`${process.env.REACT_APP_API_URL}/forms`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response)
                    navigate('/success')
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <footer className='footer' id='footer'>
            <div className='container'>
                <div className='footer_top'>
                    <Link className='footer__logo' to='/'>
                        GOOD-FOOD🍎🥝
                    </Link>
                </div>

                <div className='footer__content'>
                    <address className='footer__address'>
                        <div>Address: 60-49 Road 11378 New York</div>
                        <div>Phone: +65 11.188.888</div>
                        <div>Email: good.food23@mail.ru</div>
                    </address>
                    <div className='footer_mobile'>
                        <div className='footer_menu'>
                            <Link className='footer__link' to='/products/1'>
                                SHOP
                            </Link>
                            <Link className='footer__link' to='/blog'>
                                BLOG
                            </Link>
                            <Link className='footer__link' to='/contacts'>
                                CONTACT
                            </Link>
                            <Link className='footer__link' to='/aboutus'>
                                ABOUT US
                            </Link>
                            <Link className='footer__link' to='/aboutourshop'>
                                ABOUT OUR SHOP
                            </Link>
                        </div>

                        <div className='footer_subscribe'>
                            <h2 className='footer__top__right__heading'>
                                Sign up for our newsletter
                            </h2>
                            <p className='footer__top__right__subtitle'>
                                Get e-mail updates about our latest Shop and special offers.
                            </p>
                            <form onSubmit={handleSubmit} className='footer__top__right__form'>
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => emailHandler(e)}
                                    className='footer__top__right__input'
                                    placeholder='Enter Your Email Address'
                                />
                                <button onClick={getForm} type='submit' className='footer__top__right__btn'>
                                    Subscribe
                                </button>
                            </form>
                            <address className='social_buttons_box'>
                                <div className='social_button'>
                                    <Link
                                        target='blank'
                                        to='https://vk.com/club219140677'
                                        className='social_link'
                                    >
                                        <i className='fa-brands fa-vk fa-2x'></i>
                                    </Link>
                                </div>
                                <div className='social_button'>
                                    <Link
                                        target='blank'
                                        to='https://t.me/good_food_chanal'
                                        className='social_link'
                                    >
                                        <i className='fa-brands fa-telegram fa-2x'></i>
                                    </Link>
                                </div>
                                <div className='social_button'>
                                    <Link
                                        target='blank'
                                        to='https://chat.whatsapp.com/J7A58kQEO1679axpbCMoR6'
                                        className='social_link'
                                    >
                                        <i className='fa-brands fa-whatsapp fa-2x'></i>
                                    </Link>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>

                <div className='footer_bottom container'>
                    <p className='copyright'>
                        Copyright &copy; 2023 All rights reserved | This template is made
                        with 💚 by LOGO.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
