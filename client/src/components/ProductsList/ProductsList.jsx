import React from "react";
import "./ProductsList.scss";
import Card__back from "../_backend_folder/Card__back/Card__back";
import useFetch from "../../hooks/useFetch";

const ProductsList = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card__back item={item} key={item.id} />)}
    </div>
  );
};

export default ProductsList;
