import './Blog.scss'
import Green_line from './img/Green_line.svg'
import Salat from './img/Salat.png'
import Citrus from './img/Citrus.png'
import Avokado from './img/Avokado.png'
import Calendar from './img/Calendar.svg'
import Sms from './img/Sms.svg'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='item-sec'>
      <div className='container'>
        <h3 className='desc'>From The Blog</h3>
        <div className='green-line'>
          <img className='line' src={Green_line} alt='line' />
        </div>
        <div className='item-flex'>
          <div className='item'>
            <Link target='blank' to='#' className='item-link'>
              <img className='blog__item-pic' src={Salat} alt='product' />
              <div className='blog__txt-box'>
                <div className='blog__txt-top'>
                  <div className='blog__txt-boxer'>
                    <img
                      className='blog__topimg'
                      src={Calendar}
                      alt='calendar'
                    />
                    <p className='blog__toptext'>May 4,2021</p>
                  </div>
                  <div className='blog__txt-boxer'>
                    <div>
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.66683 14.6667H2.66683C2.31321 14.6667 1.97407 14.5262 1.72402 14.2762C1.47397 14.0261 1.3335 13.687 1.3335 13.3334V8.66671C1.3335 8.31309 1.47397 7.97395 1.72402 7.7239C1.97407 7.47385 2.31321 7.33337 2.66683 7.33337H4.66683M9.3335 6.00004V3.33337C9.3335 2.80294 9.12278 2.29423 8.74771 1.91916C8.37264 1.54409 7.86393 1.33337 7.3335 1.33337L4.66683 7.33337V14.6667H12.1868C12.5084 14.6703 12.8204 14.5576 13.0654 14.3494C13.3105 14.1411 13.4719 13.8513 13.5202 13.5334L14.4402 7.53337C14.4692 7.34228 14.4563 7.14716 14.4024 6.96154C14.3485 6.77592 14.2549 6.60424 14.1281 6.45838C14.0012 6.31253 13.8442 6.196 13.6679 6.11685C13.4915 6.03771 13.3001 5.99785 13.1068 6.00004H9.3335Z'
                          stroke='#7F8999'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                    <p className='blog__toptext'>25</p>
                  </div>
                </div>

                <h4 className='item-heading-box'>
                  Busting Salad Myths: Eat a Well-Built Salad (If You Want To)
                </h4>
                <div className='item-desc'>
                  This is usually said when someone is trying to lose weight or
                  be “super healthy.” First, to lose weight, it is widely
                  understood that we must burn more calories than we eat.
                </div>
                <div className='blog__readmore'>Read More</div>
              </div>
            </Link>
          </div>

          <div className='item'>
            <Link target='blank' to='#' className='item-link'>
              <div className='item-box'>
                <img className='blog__item-pic' src={Citrus} alt='product' />
              </div>
              <div className='blog__txt-box'>
                <div className='blog__txt-top'>
                  <div className='blog__txt-boxer'>
                    <img
                      className='blog__topimg'
                      src={Calendar}
                      alt='calendar'
                    />
                    <p className='blog__toptext'>May 4,2021</p>
                  </div>
                  <div className='blog__txt-boxer'>
                    <div>
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.66683 14.6667H2.66683C2.31321 14.6667 1.97407 14.5262 1.72402 14.2762C1.47397 14.0261 1.3335 13.687 1.3335 13.3334V8.66671C1.3335 8.31309 1.47397 7.97395 1.72402 7.7239C1.97407 7.47385 2.31321 7.33337 2.66683 7.33337H4.66683M9.3335 6.00004V3.33337C9.3335 2.80294 9.12278 2.29423 8.74771 1.91916C8.37264 1.54409 7.86393 1.33337 7.3335 1.33337L4.66683 7.33337V14.6667H12.1868C12.5084 14.6703 12.8204 14.5576 13.0654 14.3494C13.3105 14.1411 13.4719 13.8513 13.5202 13.5334L14.4402 7.53337C14.4692 7.34228 14.4563 7.14716 14.4024 6.96154C14.3485 6.77592 14.2549 6.60424 14.1281 6.45838C14.0012 6.31253 13.8442 6.196 13.6679 6.11685C13.4915 6.03771 13.3001 5.99785 13.1068 6.00004H9.3335Z'
                          stroke='#7F8999'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                    <p className='blog__toptext'>76</p>
                  </div>
                </div>

                <h4 className='item-heading-box'>
                  Vitamin C: How Much and Which Sources Are Best for Boosting
                  Immunity?
                </h4>
                <div className='item-desc'>
                  During cold and flu season, we try to do all we can to prevent
                  illness or speed up how fast we recover from illness. One such
                  strategy many employ is the use of Vitamin C for a natural
                  remedy.
                </div>
                <div className='blog__readmore'>Read More</div>
              </div>
            </Link>
          </div>
          <div className='item'>
            <Link target='blank' to='#' className='item-link'>
              <img className='blog__item-pic' src={Avokado} alt='product' />
              <div className='blog__txt-box'>
                <div className='blog__txt-top'>
                  <div className='blog__txt-boxer'>
                    <img
                      className='blog__topimg'
                      src={Calendar}
                      alt='calendar'
                    />
                    <p className='blog__toptext'>May 4,2021</p>
                  </div>
                  <div className='blog__txt-boxer'>
                    <div>
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.66683 14.6667H2.66683C2.31321 14.6667 1.97407 14.5262 1.72402 14.2762C1.47397 14.0261 1.3335 13.687 1.3335 13.3334V8.66671C1.3335 8.31309 1.47397 7.97395 1.72402 7.7239C1.97407 7.47385 2.31321 7.33337 2.66683 7.33337H4.66683M9.3335 6.00004V3.33337C9.3335 2.80294 9.12278 2.29423 8.74771 1.91916C8.37264 1.54409 7.86393 1.33337 7.3335 1.33337L4.66683 7.33337V14.6667H12.1868C12.5084 14.6703 12.8204 14.5576 13.0654 14.3494C13.3105 14.1411 13.4719 13.8513 13.5202 13.5334L14.4402 7.53337C14.4692 7.34228 14.4563 7.14716 14.4024 6.96154C14.3485 6.77592 14.2549 6.60424 14.1281 6.45838C14.0012 6.31253 13.8442 6.196 13.6679 6.11685C13.4915 6.03771 13.3001 5.99785 13.1068 6.00004H9.3335Z'
                          stroke='#7F8999'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                    <p className='blog__toptext'>58</p>
                  </div>
                </div>

                <h4 className='item-heading-box'>
                  Pump Up the Produce Power in Winter Meals
                </h4>
                <div className='item-desc'>
                  We’ve all been here before: When it seems the long, gray
                  winter will never end and you make one more pot of hearty
                  vegetable soup or another casserole.
                </div>
                <div className='blog__readmore'>Read More</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blog
