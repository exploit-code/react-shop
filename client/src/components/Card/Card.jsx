import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import saleIcon from '../../images/saleIcon.svg';
import topIcon from '../../images/topIcon.svg';

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/productpage/${item.id}`}>
      <div className='product-card'>
        <div className="product-card-marker">
          {item?.attributes.onTop && <img  src={topIcon} className="product-card-marker__top"  alt='top'/>}
          {item?.attributes.onSale && <img  src={saleIcon} className="product-card-marker__sale"  alt='sale'/>}
        </div>
        <div className="product-card__content">
          <img src={
            process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
          } alt='banana' className='product-card-img' />
          <div className='text-box-roduct-card'>
            <p className='text-product-card'>{item?.attributes.title}</p>
            <b>
              <p className='price-product-card'>${item?.attributes.price}</p>
            </b>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
