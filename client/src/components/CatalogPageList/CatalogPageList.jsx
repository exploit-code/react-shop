import React from "react";
import "./CatalogPageList.scss";
import useFetch from "../../hooks/useFetch";
import Carusel from '../Carusel/Carusel';

const CatalogPageList = ({ item }) => {
  const { data } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${item.id}`
  );

  // console.log(data)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{item.attributes.title}</h1>
      </div>

      <div className="bottom">
        <Carusel data={data} key={item.id} />
      </div>
    </div>
  );
};

export default CatalogPageList;
