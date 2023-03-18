import React from "react";
import "./CatalogPageList.scss";
import useFetch from "../../hooks/useFetch";
import Carusel from '../Carusel/Carusel';
import CircularProgress from "@mui/material/CircularProgress";
import CaruselMainPage from "../CaruselMainPage/CaruselMainPage";
import Alert from "@mui/material/Alert";
import Box from '@mui/material/Box';


const CatalogPageList = ({ item }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${item.id}`
  );

  // console.log(data)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{item.attributes.title}</h1>
      </div>

      <div className="bottom">
        {error
          ? <Alert severity="error">Something went wrong!</Alert>
          : loading ?
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress color="success"/>
            </Box>
            :
            <Carusel data={data} key={item.id}/>
        }


      </div>
    </div>
  );
};

export default CatalogPageList;
