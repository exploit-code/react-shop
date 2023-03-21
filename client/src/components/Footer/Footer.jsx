import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
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
          <div className='footer_menu'>
            <Link className='footer__link' to='/'>
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
            <form action='#' className='footer__top__right__form'>
              <input
                type='email'
                className='footer__top__right__input'
                placeholder='Enter Your Email Address'
              />
              <button type='submit' className='footer__top__right__btn'>
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
