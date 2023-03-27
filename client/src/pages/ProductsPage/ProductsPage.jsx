import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import useFetch from "../../hooks/useFetch";
import PrettoSlider from './SliderStyle'
import "./ProductsPage.scss";
import iconTile from '../../images/tiles.png';
import iconList from '../../images/list.png';
import Button from "../../components/Button/Button";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const ProductsPage = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(50);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [value, setValue] = useState(0);
  const [priceValue, setPriceValue] = useState(50);
  const [products, setProducts] = useState([])

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
    setValue(value);
  };

  const [view, setView] = useState(true);

  const marks = [
    {
      value: 0,
      label: '0$',
    },
    {
      value: 50,
      label: '50$',
    },
    {
      value: 100,
      label: '100$',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleValueChange = (event, newValue) => {
    setMaxPrice(newValue);
  };
  const handlePriceChange = (event) => {
    event.preventDefault();
    setPriceValue(maxPrice);
  };

  useEffect(() => {
    const title = data?.map((item) => ({
      title: item.attributes.title,
      id: item.id
    }))
    let copy = Object.assign([], title);
    copy.push({ title: 'All Products', id: 0 })
    copy.reverse()
    setProducts(copy)
  }, [data])

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Filters</h2>
          <FormControl className="inputItem">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {products.map((item) => (
                <FormControlLabel
                  key={item.id}
                  className="inputItem"
                  value={item.id}
                  control={
                    <Radio
                      color='success'
                      size='small'
                    />
                  }
                  label={item.title}
                />
              ))}
            </RadioGroup>
          </FormControl>

        </div>
        <form className="filterItem">
          <h2>Filter by price</h2>
          <Box sx={{ width: 150 }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <PrettoSlider
                aria-labelledby="track-false-slider"
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                max={100}
                defaultValue={50}
                marks={marks}
                getAriaValueText={valuetext}
                onChange={handleValueChange}
              />
            </Stack>
            <Button onClick={handlePriceChange} classname='filter__btn' text='Apply'/>
          </Box>
        </form>
        <div className="filterItem">
          <h2>Sort by</h2>
          <FormControl className="inputItem">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <FormControlLabel
                className="inputItem"
                value="asc"
                control={
                  <Radio
                    color='success'
                    size='small'
                  />
                }
                label="Price (Lowest first)"
              />
              <FormControlLabel
                className="inputItem"
                value="desc"
                control={
                  <Radio
                    color='success'
                    size='small'
                  />
                }
                label="Price (Highest first)"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="filterItem">
          <h2>View</h2>
          <button className="btn-view" onClick={() => setView(!view)}>
            <span>{view ? 'List' : 'Tile'}</span>
            <img src={view ? `${iconList}` : `${iconTile}`} alt=""/>
          </button>
        </div>

      </div>
      <div className="right">
        <ProductsList
          catId={catId}
          maxPrice={priceValue}
          sort={sort}
          subCats={selectedSubCats.find(el => el === '0') ? setSelectedSubCats([]) : selectedSubCats}
          view={view}
          setView={setView}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
