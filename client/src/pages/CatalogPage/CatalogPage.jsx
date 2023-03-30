import React from 'react';
import CatalogCategoriesList from "../../components/CatalogPageList/CatalogPageList";
import useFetch from "../../hooks/useFetch";
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';

const CatalogPage = () => {
    const { data,loading,error} = useFetch(
        `/categories?`
    );
    return (
        <div>
            <div className="contain" >
                <div>
                    {error
                        ? <Alert severity="error">Something went wrong!</Alert>
                        : loading
                            ? <LinearProgress color="success" />
                            : data?.slice(1,8).map((item) => (
                        <CatalogCategoriesList item={item}/>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default CatalogPage;
