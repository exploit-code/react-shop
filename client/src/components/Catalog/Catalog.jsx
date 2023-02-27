import './catalog.scss';
import line from '../../images/line.png';
import useFetch from "../../hooks/useFetch";
import { useParams} from "react-router-dom";
import CatalogList from "../CalalogList/CatalogList";
import React, {useState} from "react";


const Catalog = () => {

  const catId = parseInt(useParams().id);
  const [selectedCats, setSelectedCats] = useState([]);
  const [value, setValue] = useState([]);

  const { data, loading, error } = useFetch(
    `/categories?[id][$eq]=${catId}`
  );

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

  console.log(data)

  return (
    <section className='catalog-container'>
      <div className='catalog-heading'>
        <b>Featured Product</b>
        <img src={line} alt='line' className='heading-line-img'/>
        <div className="filterItem">
          <div className="checkbox-btn-group">

          </div>
          <div className='catalog-filter-btn'>
            {data?.slice(0, 5).map((item) => (
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
        <CatalogList catId={catId} cats={selectedCats} />
      </section>
    )
}

export default Catalog;
