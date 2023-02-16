import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../ProductsList_back/ProductsList";
import useFetch from "../hooks/useFetch";
import "./ProductsPage.scss";

const ProductsPage = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const  { data, loading, error } = useFetch(
      `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
        isChecked
            ? [...selectedSubCats, value]
            : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {data?.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
            ))}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                  type="range"
                  min={10}
                  max={1000}
                  onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                  type="radio"
                  id="asc"
                  value="asc"
                  name="price"
                  onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input
                  type="radio"
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img
              className="catImg"
              src="https://avatars.mds.yandex.net/i?id=c72bf677ffb019918435d0e52b185fe69e79f6e5-8497071-images-thumbs&n=13&exp=1"
              alt=""
          />
          <ProductsList catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
      </div>
  );
};

export default ProductsPage;
