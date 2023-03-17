import './catalog.scss';
import line from '../../images/line.png';
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import CatalogList from "../CalalogList/CatalogList";
import React, { useState } from "react";


const Catalog = () => {

  const catId = parseInt(useParams().id);
  const { data } = useFetch(
    `/categories?[id][$eq]=${catId}`
  );

  const [selectedCats, setSelectedCats] = useState([]);
  const [value, setValue] = useState(1);

  const handleClick = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCats(

      isChecked
        ? [...selectedCats, value]
        : selectedCats.filter((item) => item !== value)
    );

    setValue(e.target.value);
  };

  return (
    <section className='catalog-container'>
      <div className='catalog-heading'>
        <b>Featured Product</b>
        <img src={line} alt='line' className='heading-line-img' />
        <div className="filterItem">
          <div className='catalog-filter-btn'>
            {data?.slice(0, 8).map((item) => (
              <label htmlFor={item.id} className="checkbox-btn" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleClick}
                  checked={Number(value) === Number(item.id)}
                />
                <span>{item.attributes.title}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div>
        {data?.slice(1, 2).map((item) => (
          <CatalogList item={item} key={item.id} selectedCats={selectedCats} />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
