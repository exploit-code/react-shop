import './footer.scss';
import AmericanExpress from './img/AmericanExpress-light.svg'
import Cirrus_light from './img/Cirrus_light.svg'
import Maestro_light from './img/Maestro_light.svg'
import MasterCard_light from './img/MasterCard_light.svg'
import Visa_light from './img/Visa_light.svg'
import Logo from './img/Logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-flex">
                    <div className="footer__top__right">
                        <img src={Logo} alt="logo" />
                        <div className="footer__top__right__text">
                            <p className="addresss">Address: 60-49 Road 11378 New York
                                Phone: +65 11.188.888
                                Email: hello@colorlib.com</p>
                        </div>
                    </div>
                    <div className="footer__top__right2">
                        <div className="mega-box">
                            <div className="mega-item">
                                <h2 className="menu-heading">Useful link</h2>
                                <a className="mega-link1" href="#">About Us</a>
                                <a className="mega-link1" href="#">About Our Shop</a>
                                <a className="mega-link1" href="#">Secure Shopping</a>
                                <a className="mega-link1" href="#">Delivery infomation</a>
                                <a className="mega-link1" href="#">Privacy Policy</a>
                                <a className="mega-link1" href="#">Our Sitemap</a>
                            </div>
                            <div className="mega-item2">
                                <a className="mega-link" href="#">Who We Are</a>
                                <a className="mega-link" href="#">Our Services</a>
                                <a className="mega-link" href="#">Projects</a>
                                <a className="mega-link" href="#">Contact</a>
                                <a className="mega-link" href="#">Innovation</a>
                                <a className="mega-link" href="#">Testimonials</a>
                            </div>
                        </div>
                    </div>
                    <nav className="footer__soc">
                        <h2 className="footer__top__right__heading">Sign Up for Our Newsletter
                        </h2>
                        <p className="footer__top__right__subtitle">Get e-mail updates about our latest Shop and special
                            offers.</p>
                        <form action="#" className="footer__top__right__form">
                            <input type="email" className="footer__top__right__input" placeholder="Enter Your Email Address" />
                            <button type="submit" className="footer__top__right__btn">Subscribe</button>
                        </form>
                        <a href="#" className="footer__link"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="footer__link"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="#" className="footer__link"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#" className="footer__link"><i class="fa-brands fa-twitter"></i></a>
                    </nav>
                </div>
                <div className="footer-flex1">
                    <div className="footer__top__right">
                        <p className="copyrate">Copyright ©2021 All rights reserved | This template is made with 💚 by LOGO</p>
                    </div>
                    <nav className="footer__soc">
                        <a href="#" className="pay__link"><img src={Visa_light} /></a>
                        <a href="#" className="pay__link"><img src={MasterCard_light} /></a>
                        <a href="#" className="pay__link"><img src={Maestro_light} /></a>
                        <a href="#" className="pay__link"><img src={Cirrus_light} /></a>
                        <a href="#" className="pay__link"><img src={AmericanExpress} /></a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
