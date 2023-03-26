import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import useFetch from "../../hooks/useFetch";
import "./ProductsPage.scss";
import iconTile from '../../images/tiles.png';
import iconList from '../../images/list.png';
import Button from "../../components/Button/Button";
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const ProductsPage = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [value, setValue] = useState(0);
  const [priceValue, setPriceValue] = React.useState(30);

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
  const resetChange = () => {
    setSelectedSubCats([]);
  };

  console.log('priceValue', priceValue)

  const [view, setView] = useState(true);

  const handleChangePrice = (event, newValue) => {
    setPriceValue(newValue);
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Filters</h2>
          <form>
            <div className="inputItem">
              <input
                type="radio"
                name='filter'
                value={value}
                id='0'
                onClick={resetChange}
              />
              <label htmlFor='0'>All Products</label>
            </div>

            {data?.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="radio"
                  name='filter'
                  id={item.id}
                  value={item.id}
                  onClick={handleChange}
                  // checked={Number(value) === Number(item.id)}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </form>

        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <Box sx={{ width: 150 }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
                max={300}
                onChange={handleChangePrice}
              />
            </Stack>
          </Box>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={10}
              max={100}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc"> Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
          {/*<Button*/}
          {/*  classname='input__btn'*/}
          {/*  type='submit'*/}
          {/*  text='Apply filter'*/}
          {/*  // onClick={() => handleChange}*/}
          {/*/>*/}
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

        {/*<Catalog />*/}
        <ProductsList catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} view={view}
                      setView={setView}/>
      </div>
    </div>
  );
};

export default ProductsPage;
