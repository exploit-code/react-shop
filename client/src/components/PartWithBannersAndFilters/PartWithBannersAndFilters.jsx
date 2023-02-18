import '../../normalize.css';
import './PartWithBannersAndFilters.scss';
import './media_PartWithBannersAndFilters.scss';

import {AuthContext} from "../../context/UserContext";

import banner_1 from './img/banner_1.png';
import banner_2 from './img/banner_2.png';
import arrowRight from './img/arrow_right.png';
import arrowLeft from './img/arrow_left.png';

import { useContext } from "react";
import useFetch from "../../hooks/useFetch";


const PartWithBannersAndFilters = () => {
  const { onAddToCart } = useContext(AuthContext)

  const { data } = useFetch(
    `/products?populate=*`
  );

  return (
    <>
      <div className="containerPartWithBannersAndFilters">
        <div className="bannerBlock">
          <div className="bannerBlock__item">
            <img className='bannerBlock__item_img' src={banner_1} alt="banner 1"/>
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
            {data?.slice(1, 4).map((item, index) => (
              <div key={index} onClick={() => onAddToCart(item)} className="filterBlock__latestProduct_item">
                <div className="filterBlock__latestProduct_item_left">
                  <img className="filterBlock__latestProduct_item_left_img"
                       src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
                       alt={item.attributes.title}/>
                </div>
                <div className="filterBlock__latestProduct_item_right">
                  <div className="filterBlock__latestProduct_item_right_name">{item.attributes.title}</div>
                  <div className="filterBlock__latestProduct_item_right_price">${item.attributes.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="filterBlock__topRatedProducts">
            <div className="filterBlock__topRatedProducts_titleBlock">
              <div className="filterBlock__topRatedProducts_titleBlock_title">Top rated Products</div>
              <img className="filterBlock__topRatedProducts_titleBlock_arrowLeft" src={arrowLeft} alt="arrow left"></img>
              <img className="filterBlock__reviewProducts_titleBlock_arrowRight" src={arrowRight} alt="arrow right"></img>
            </div>
            {data?.slice(4, 7).map((item, index) => (
              <div key={index} onClick={() => onAddToCart(item)} className="filterBlock__latestProduct_item">
                <div className="filterBlock__latestProduct_item_left">
                  <img className="filterBlock__latestProduct_item_left_img"
                       src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
                       alt={item.attributes.title}/>
                </div>
                <div className="filterBlock__latestProduct_item_right">
                  <div className="filterBlock__latestProduct_item_right_name">{item.attributes.title}</div>
                  <div className="filterBlock__latestProduct_item_right_price">${item.attributes.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="filterBlock__reviewProducts">
            <div className="filterBlock__reviewProducts_titleBlock">
              <div className="filterBlock__reviewProducts_titleBlock_title">Review Products</div>
              <img className="filterBlock__reviewProducts_titleBlock_arrowLeft" src={arrowLeft} alt="arrow left"></img>
              <img className="filterBlock__reviewProducts_titleBlock_arrowRight" src={arrowRight} alt="arrow right"></img>
            </div>
            {data?.slice(7, 10).map((item, index) => (
              <div key={index} onClick={() => onAddToCart(item)} className="filterBlock__latestProduct_item">
                <div className="filterBlock__latestProduct_item_left">
                  <img className="filterBlock__latestProduct_item_left_img"
                       src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
                       alt={item.attributes.title}/>
                </div>
                <div className="filterBlock__latestProduct_item_right">
                  <div className="filterBlock__latestProduct_item_right_name">{item.attributes.title}</div>
                  <div className="filterBlock__latestProduct_item_right_price">${item.attributes.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PartWithBannersAndFilters