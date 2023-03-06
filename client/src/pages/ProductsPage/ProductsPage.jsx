import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import useFetch from "../../hooks/useFetch";
import "./ProductsPage.scss";
import iconTile from '../../images/tiles.png';
import iconList from '../../images/list.png';


const ProductsPage = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(200);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
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

  const [view, setView] = useState(true);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Filters</h2>
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
              max={200}
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
            <label htmlFor="asc"> Price (Lowest first)</label>
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

        <div className="filterItem">
        <h2>View</h2>
          <button className="btn-view" onClick={() => setView(!view)}>
            <span>{view ? 'List' : 'Tile'}</span>
            <img src={view ? `${iconList}` : `${iconTile}`} alt="" />
          </button>
        </div>

      </div>
      <div className="right">

        {/*<Catalog />*/}
        <ProductsList catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} view={view} setView={setView} />
      </div>
    </div>
  );
};

export default ProductsPage;
