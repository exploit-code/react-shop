import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";


const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/productpage/${item.id}`}>
      <div className='product-card'>
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
    </Link>
  );
};

export default Card;
