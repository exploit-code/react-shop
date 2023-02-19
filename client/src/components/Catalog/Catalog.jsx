import './catalog.scss';
// import '../../index.scss';
import banan from '../../images/banan.png';
import line from '../../images/line.png';
import useFetch from "../../hooks/useFetch";
import { useParams} from "react-router-dom";
import CatalogList from "../CalalogList/CatalogList";
import React, {useState} from "react";


const Catalog = () => {

  const catId = parseInt(useParams().id);

  const [selectedCats, setSelectedCats] = useState([]);



  const  { data, loading, error } = useFetch(
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
  };

    return (
      <section className='catalog-container'>
        <div className='catalog-heading'>
          <b>Featured Product</b>
          <img src={line} alt='line' className='heading-line-img' />
          <div className="filterItem">
            <div className="checkbox-btn-group">

            </div>
            <div className='catalog-filter-btn'>
              {data?.slice(1,6).map((item) => (
                  <div className="inputItem" key={item.id}>
                    <input
                        type="checkbox"
                        id={item.id}
                        value={item.id}
                        onClick={handleClick}
                    />
                    <label htmlFor={item.id}>{item.attributes.title}</label>
                  </div>
              ))}
            </div>

          </div>


        </div>

        <CatalogList catId={catId} cats={selectedCats} />
      </section>
    )
}

export default Catalog;
