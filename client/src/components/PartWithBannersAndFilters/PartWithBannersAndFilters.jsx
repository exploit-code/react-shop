import '../../normalize.css';
import './PartWithBannersAndFilters.scss';
import './media_PartWithBannersAndFilters.scss';

import banner_1 from './img/banner_1.png';
import banner_2 from './img/banner_2.png';
import arrowRight from './img/arrow_right.png';
import arrowLeft from './img/arrow_left.png';

import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";
import FilteredColumn from "../FilteredColumn/FilteredColumn";


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
          <FilteredColumn type="latest"/>
          <FilteredColumn type="top-rated"/>
          <FilteredColumn type="sale" />
        </div>
      </div>
    </>
  )
}

export default PartWithBannersAndFilters
