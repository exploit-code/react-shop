import './search.scss';
import useFetch from "../../hooks/useFetch";
import { useParams} from "react-router-dom";
import React, {useState} from "react";

const Search = () => {

  const catId = parseInt(useParams().id);
  const [selectedCats, setSelectedCats] = useState([]);
  const [value, setValue] = useState(1);
  const { data } = useFetch(
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
    console.log(e.target.value)
  };
  console.log(data)


  return (
          <div className='catalog-filter-btn'>
            {data?.map((item) => (
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

    )
}

export default Search;
