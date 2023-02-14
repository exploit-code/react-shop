import '../../normalize.css';
import './PartWithBannersAndFilters.scss';
import './media_PartWithBannersAndFilters.scss';


import banner_1 from './img/banner_1.png';
import banner_2 from './img/banner_2.png';
import arrowRight from './img/arrow_right.png';
import arrowLeft from './img/arrow_left.png';

import apple from './img/apple.png';
import blueberry from './img/blueberry.png';
import capsicumGreen from './img/capsicum_green.png';
import cauliflower from './img/cauliflower.png';
import nut from './img/nut.png';
import organicQuince from './img/organic_quince.png';
import pomegranate from './img/pomegranate.png';
import raspberry from './img/raspberry.png';
import tomato from './img/tomato.png';

const PartWithBannersAndFilters = () => {
  return (
    <>
      <div className="containerPartWithBannersAndFilters">
        <div className="bannerBlock">
          <div className="bannerBlock__item">
            <img className='bannerBlock__item_img' src={banner_1} alt="banner 1" />
            <h2 className='bannerBlock__item_titleLeft'>summer fruits</h2>
            <p className="bannerBlock__item_textLeft">100% all natural fruit juice</p>
            <button className="bannerBlock__item_btnLeft">SHOP NOW</button>
          </div>
          <div className="bannerBlock__item">
            <img className='bannerBlock__item_img' src={banner_2} alt="banner 2" />
            <h2 className='bannerBlock__item_titleRight'>Dried & Drink <br /> Fruits</h2>
            <p className="bannerBlock__item_textRight">100% all natural fruit juice</p>
            <button className="bannerBlock__item_btnRight">SHOP NOW</button>
          </div>
        </div>

        <div className="filterBlock">
          <div className="filterBlock__latestProduct">
            <div className="filterBlock__latestProduct_titleBlock">
              <div className="filterBlock__latestProduct_titleBlock_title">Latest Product</div>
              <img className="filterBlock__latestProduct_titleBlock_arrowLeft" src={arrowLeft} alt="arrow left" ></img>
              <img className="filterBlock__latestProduct_titleBlock_arrowRight" src={arrowRight} alt="arrow right"></img>
            </div>
            <div className="filterBlock__latestProduct_item">
              <div className="filterBlock__latestProduct_item_left">
                <img className="filterBlock__latestProduct_item_left_img" src={cauliflower} alt="cauliflower" />
              </div>
              <div className="filterBlock__latestProduct_item_right">
                <div className="filterBlock__latestProduct_item_right_name">Cauliflower</div>
                <div className="filterBlock__latestProduct_item_right_price">$30.00</div>
              </div>
            </div>
            <div className="filterBlock__latestProduct_item">
              <div className="filterBlock__latestProduct_item_left">
                <img className="filterBlock__latestProduct_item_left_img" src={organicQuince} alt="Organic quince" />
              </div>
              <div className="filterBlock__latestProduct_item_right">
                <div className="filterBlock__latestProduct_item_right_name">Organic quince</div>
                <div className="filterBlock__latestProduct_item_right_price">$30.00</div>
              </div>
            </div>
            <div className="filterBlock__latestProduct_item">
              <div className="filterBlock__latestProduct_item_left">
                <img className="filterBlock__latestProduct_item_left_img" src={tomato} alt="tomato hybrid" />
              </div>
              <div className="filterBlock__latestProduct_item_right">
                <div className="filterBlock__latestProduct_item_right_name">Tomato hybrid</div>
                <div className="filterBlock__latestProduct_item_right_price">$30.00</div>
              </div>
            </div>
          </div>

          <div className="filterBlock__topRatedProducts">
            <div className="filterBlock__topRatedProducts_titleBlock">
              <div className="filterBlock__topRatedProducts_titleBlock_title">Top rated Products</div>
              <img className="filterBlock__topRatedProducts_titleBlock_arrowLeft" src={arrowLeft} alt="arrow left"></img>
              <img className="filterBlock__reviewProducts_titleBlock_arrowRight" src={arrowRight} alt="arrow right"></img>
            </div>
            <div className="filterBlock__topRatedProducts_item">
              <div className="filterBlock__topRatedProducts_item_left">
                <img className="filterBlock__topRatedProducts_item_left_img" src={blueberry} alt="blueberry" />
              </div>
              <div className="filterBlock__topRatedProducts_item_right">
                <div className="filterBlock__topRatedProducts_item_right_name">Blueberry</div>
                <div className="filterBlock__topRatedProducts_item_right_price">$30.00</div>
              </div>
            </div>
            <div className="filterBlock__topRatedProducts_item">
              <div className="filterBlock__topRatedProducts_item_left">
                <img className="filterBlock__topRatedProducts_item_left_img" src={capsicumGreen} alt="capsicum green" />
              </div>
              <div className="filterBlock__topRatedProducts_item_right">
                <div className="filterBlock__topRatedProducts_item_right_name">Capsicum-green</div>
                <div className="filterBlock__topRatedProducts_item_right_price">$30.00</div>
              </div>
            </div>
            <div className="filterBlock__topRatedProducts_item">
              <div className="filterBlock__topRatedProducts_item_left">
                <img className="filterBlock__topRatedProducts_item_left_img" src={pomegranate} alt="pomegranate" />
              </div>
              <div className="filterBlock__topRatedProducts_item_right">
                <div className="filterBlock__topRatedProducts_item_right_name">Pomegranate</div>
                <div className="filterBlock__topRatedProducts_item_right_price">$30.00</div>
              </div>
            </div>
          </div>

          <div className="filterBlock__reviewProducts">
            <div className="filterBlock__reviewProducts_titleBlock">
              <div className="filterBlock__reviewProducts_titleBlock_title">Review Products</div>
              <img className="filterBlock__reviewProducts_titleBlock_arrowLeft" src={arrowLeft} alt="arrow left"></img>
              <img className="filterBlock__reviewProducts_titleBlock_arrowRight" src={arrowRight} alt="arrow right"></img>
            </div>
            <div className="filterBlock__reviewProducts_item">
              <div className="filterBlock__reviewProducts_item_left">
                <img className="filterBlock__reviewProducts_item_left_img" src={nut} alt="hazelnuts filbert nut" />
              </div>
              <div className="filterBlock__reviewProducts_item_right">
                <div className="filterBlock__reviewProducts_item_right_name">Hazelnuts filbert nut</div>
                <div className="filterBlock__reviewProducts_item_right_price">$30.00</div>
              </div>
            </div>
            <div className="filterBlock__reviewProducts_item">
              <div className="filterBlock__reviewProducts_item_left">
                <img className="filterBlock__reviewProducts_item_left_img" src={apple} alt="apple" />
              </div>
              <div className="filterBlock__reviewProducts_item_right">
                <div className="filterBlock__reviewProducts_item_right_name">Green apple</div>
                <div className="filterBlock__reviewProducts_item_right_price">$30.00</div>
              </div>
            </div>
            <div className="filterBlock__reviewProducts_item">
              <div className="filterBlock__reviewProducts_item_left">
                <img className="filterBlock__reviewProducts_item_left_img" src={raspberry} alt="raspberry" />
              </div>
              <div className="filterBlock__reviewProducts_item_right">
                <div className="filterBlock__reviewProducts_item_right_name">Fresh raspberry</div>
                <div className="filterBlock__reviewProducts_item_right_price">$30.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartWithBannersAndFilters