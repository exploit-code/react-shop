import React from "react";
import Card from "../Card/Card";
import "./CatalogCategoriesList.scss";
import useFetch from "../../hooks/useFetch";

const CatalogCategoriesList = ({  item }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${item.id}`
  );


  return (
    <div className="featuredProducts">
      <div className="top">
          <h1>{item.attributes.title}</h1>
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
