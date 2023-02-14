import './footer.scss'


const Footer = () => {
    return (
        <div className="item-sec">
            <div className="container">
                <h3 className="desc">From The Blog</h3>
                <div className="green-line">
                    <img className="line" src="img/Green line.svg" alt="line" />
                </div>
                <div className="item-flex">
                    <div className="item">
                        <a className="item-link" href="#">
                            <img className="item-pic" src="img/Salat.png" alt="product" />
                            <div className="txt-box">
                                <div className="txt-boxer">
                                    <img className="calendar" src="img/Calendar.svg" alt="calendar" />
                                    <p className="calendar-chat">May 4,2021</p>
                                    <img className="chat" src="img/Sms.svg" alt="chat" />
                                    <p className="calendar-chat">54</p>
                                </div>
                                <h4 className="item-heading-box">Busting Salad Myths: Eat a Well-Built Salad (If You Want To)
                                </h4>
                                <p className="item-desc">This is usually said when someone is trying to lose weight or be “super
                                    healthy.” First, to lose weight, it is widely understood that we must burn more calories
                                    than we eat. Thus Read More</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="item">
                    <a className="item-link" href="#">
                        <div className="item-box">
                            <img className="item-pic" src="img/Citrus.png" alt="product" />
                        </div>
                        <div className="txt-box">
                            <div className="txt-boxer">
                                <img className="calendar" src="img/Calendar.svg" alt="calendar" />
                                <p className="calendar-chat">May 4,2021</p>
                                <img className="chat" src="img/Sms.svg" alt="chat" />
                                <p className="calendar-chat">25</p>
                            </div>
                            <h4 className="item-heading-box">Vitamin C: How Much and Which
                                Sources Are Best for Boosting Immunity?</h4>
                            <p className="item-desc">During cold and flu season, we try to do all we can to prevent illness
                                or speed up how fast we recover from illness. One such strategy many employ is the use
                                of Vitamin C for a natural remedy. Read More</p>
                        </div>
                    </a>

                </div>
                <div className="item">
                    <a className="item-link" href="#">
                        <img className="item-pic" src="img/Avokado.png" alt="product" />
                        <div className="txt-box">
                            <div className="txt-boxer">
                                <img className="calendar" src="img/Calendar.svg" alt="calendar" />
                                <p className="calendar-chat">May 4,2021</p>
                                <img className="chat" src="img/Sms.svg" alt="chat" />
                                <p className="calendar-chat">58</p>
                            </div>
                            <h4 className="item-heading-box">Pump Up the Produce Power in Winter Meals</h4>
                            <p className="item-desc">We’ve all been here before: When it seems the long, gray winter will
                                never end and you make one more pot of hearty vegetable soup or another casserole. Read
                                More</p>
                        </div>
                    </a>
                </div>
            </div>




            <footer classNames="footer">
                <div className="container">
                    <div className="footer-flex">
                        <div className="footer__top__right">
                            <img src="img/Logo.png" alt="logo" />
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
                            <p className="copyrate">Copyright ©2021 All rights reserved | This template is made with ?? by LOGO</p>
                        </div>
                        <nav className="footer__soc">
                            <a href="#" className="pay__link"><img src="img/Visa-light.svg" /></a>
                            <a href="#" className="pay__link"><img src="img/MasterCard-light.svg" /></a>
                            <a href="#" className="pay__link"><img src="img/Maestro-light.svg" /></a>
                            <a href="#" className="pay__link"><img src="img/Cirrus-light.svg" /></a>
                            <a href="#" className="pay__link"><img src="img/AmericanExpress-light.svg" /></a>
                        </nav>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Footer;
