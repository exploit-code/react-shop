import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="http://localhost:1337/uploads/fresh_fruit_cat_5b5ea8e2f7.jpg?updated_at=2023-02-15T03:03:03.793Z"
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
              src="http://localhost:1337/uploads/dried_fruit_cat_461137b72f.jpg?updated_at=2023-02-15T03:03:03.232Z"
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
              src="http://localhost:1337/uploads/vegetables_cat_f04de0f086.jpg?updated_at=2023-02-15T03:03:03.768Z"
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
              src="http://localhost:1337/uploads/drink_fruits_cat_4d70d3108a.jpg?updated_at=2023-02-15T03:03:03.738Z"
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
