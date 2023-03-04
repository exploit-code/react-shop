import React  from "react";
import "./CatalogList.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";


const CatalogList = ({ selectedCats }) => {
    const { data } = useFetch(
        `/products?populate=*${selectedCats.map(
            (selectedCats) => `&[filters][categories][id][$eq]=${selectedCats}`
        )}`
    );

  return (
      <div className="catalog-item-box" >
        {data?.slice(0,8).map((item) => <Card item={item} key={item.id} />)}
      </div>
  );
};

export default CatalogList;
