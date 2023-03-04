import React, { useContext } from 'react';
import CatalogCategoriesList from "../../components/CatalogPageList/CatalogPageList";
import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";


const CatalogPage = () => {
    const catId = parseInt(useParams().id);
    const { data} = useFetch(
        `/categories?[id][$eq]=${catId}`
    );

    return (
        <div>
            <div className="contain" >
                <div>
                    {data?.slice(1,8).map((item) => (
                        <CatalogCategoriesList item={item}/>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default CatalogPage;
