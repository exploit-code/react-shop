import React, { useContext } from 'react';
import CatalogCategoriesList from "../../components/CatalogPageList/CatalogPageList";
import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from '@mui/material/Alert';

const CatalogPage = () => {
    const catId = parseInt(useParams().id);
    const { data,loading,error} = useFetch(
        `/categories?[id][$eq]=${catId}`
    );

    return (
        <div>
            <div className="contain" >
                <div>
                    {error
                        ? <Alert severity="error">Something went wrong!</Alert>
                        : loading
                            ? <CircularProgress color="success"/>
                            : data?.slice(1,8).map((item) => (
                        <CatalogCategoriesList item={item}/>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default CatalogPage;
