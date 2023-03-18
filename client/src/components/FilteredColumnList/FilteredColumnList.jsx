import '../../normalize.css';
import './FilteredColumnList.scss';

import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';


const FilteredColumnList = ({ type }) => {
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  let quantity = 1;

  const [firstIdx, setFirstIdx] = useState(0);
  const secondIdx = firstIdx + 3;

  const arrRight = () => {
    if(secondIdx >= data?.length) {
      console.log("листай влево")
    }else{
      setFirstIdx(firstIdx + 3);
    }
  }

  const arrLeft = () => {
    if(firstIdx <= 0){
      console.log("листай вправо")
    }else{
      setFirstIdx(firstIdx - 3);
    }
  }

  return (
    <>
      <div className="arrowBlock" >
        <div onClick={arrLeft} className="filterBlock__latestProducts_titleBlock_arrowLeft">&#8249;</div>
        <div onClick={arrRight} className="filterBlock__latestProducts_titleBlock_arrowRight">&#8250;</div>
      </div>
            {error
              ? <Alert severity="error">Something went wrong!</Alert>
              : loading ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress color="success"/>
                  </Box>
                )
                : (data?.slice(firstIdx, secondIdx).map((item) => (
                  <div key={item.id} className="filterBlock__latestProducts_item ">
                    <Link to={`/productpage/${item.id}`} className="filterBlock__latestProducts_item_left">
                      <div className='overlay'>
                        <img className="filterBlock__latestProducts_item_left_img"
                             src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
                             alt={item.attributes.title}/>
                      </div>
                    </Link>
                    <div className="filterBlock__latestProducts_item_right">
                      <div className="filterBlock__latestProducts_item_right_name">{item.attributes.title}</div>
                      <div
                        className="filterBlock__latestProducts_item_right_price">${(item.attributes.price).toFixed(2)}</div>
                      <p onClick={() =>
                        dispatch(
                          addToCart({
                              id: item.id,
                              title: item.attributes.title,
                              desc: item.attributes.desc,
                              price: item.attributes.price,
                        img: item.attributes.img.data.attributes.url,
                        totalPriceItem: (item.attributes.price).toFixed(2),
                              quantity,
                            }
                          )
                        )

                      }>
                        Add to cart
                      </p>
                    </div>
                  </div>
                )))}
    </>
  )
}

export default FilteredColumnList
