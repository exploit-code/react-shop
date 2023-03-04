import React from "react";
import Card from "../Card/Card";
import "./CatalogPageList.scss";
import useFetch from "../../hooks/useFetch";

const CatalogPageList = ({  item }) => {
  const { data } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${item.id}`
  );


  return (
    <div className="featuredProducts">
      <div className="top">
          <h1>{item.attributes.title}</h1>
      </div>
      <div className="bottom">
        { data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default CatalogPageList;
