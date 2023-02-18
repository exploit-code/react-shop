import React from "react";
import "./ProductsList.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const ProductsList = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default ProductsList;
