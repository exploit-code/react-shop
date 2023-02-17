import React from "react";
import Card__back from "../Card__back/Card__back";
import "./FeaturedProducts__back.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts__back = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card__back item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts__back;
