import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="col">

        <div className="row">
          <img
            src="http://localhost:1337/uploads/thumbnail_fresh_fruit_cat_7501c8fbcb.png?width=240&height=176"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Fresh Fruit
            </Link>
          </button>
        </div>
      </div>
      <div className="col ">
        <div className="row">
          <img
              src="http://localhost:1337/uploads/thumbnail_dried_fruit_cat_4022640ca7.jpg?width=240&height=176"
              alt=""
          />
          <button>
            <Link className="link" to="/products/2">
              Dried Fruit
            </Link>
          </button>
        </div>
      </div>
      <div className="col ">
        <div className="row">
          <img
              src="http://localhost:1337/uploads/thumbnail_vegetables_cat_d97f16a526.png?width=240&height=176"
              alt=""
          />
          <button>
            <Link className="link" to="/products/3">
              Vegetables
            </Link>
          </button>
        </div>
      </div>
      <div className="col ">
        <div className="row">
          <img
              src="http://localhost:1337/uploads/thumbnail_drink_fruits_cat_c8e09645af.png?width=240&height=176"
              alt=""
          />
          <button>
            <Link className="link" to="/products/4">
              Drink Fruits
            </Link>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Categories;
