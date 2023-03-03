import React from "react";
import Card from "../Card/Card";
import "./CatalogCategoriesList.scss";
import useFetch from "../../hooks/useFetch";

const CatalogCategoriesList = ({ cat }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${cat}`
  );
console.log(cat, 'catt')

  return (
    <div className="featuredProducts">
      <div className="top">
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default CatalogCategoriesList;
