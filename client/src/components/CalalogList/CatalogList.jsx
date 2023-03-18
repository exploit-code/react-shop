import React from "react";
import "./CatalogList.scss";
import useFetch from "../../hooks/useFetch";
import CaruselMainPage from "../CaruselMainPage/CaruselMainPage";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
// import Card from "../Card/Card";


const CatalogList = ({ item, selectedCats }) => {
    const { data, loading, error } = useFetch(
      `/products?populate=*${selectedCats.map(
        (selectedCats) => `&[filters][categories][id][$eq]=${selectedCats}`
      )}`
    );

    return (
        // <div className="catalog-item-box" >
        //     {loading
        //         ? "loading"
        //         : data?.slice(0, 8).map((item) => <Card item={item} key={item.id} />)}
        // </div>

      <div className="featuredProducts">
          {error
            ? <Alert severity="error">Something went wrong!</Alert>
            : loading ?
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress color="success"/>
              </Box>
              :
              <CaruselMainPage data={data} key={item.id}/>
          }

      </div>
    );
};

export default CatalogList;
