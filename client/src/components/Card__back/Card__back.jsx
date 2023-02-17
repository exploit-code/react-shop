import React from "react";
import "./Card__back.scss";
import { Link } from "react-router-dom";

const Card__back = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/productpage/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New!</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card__back;
