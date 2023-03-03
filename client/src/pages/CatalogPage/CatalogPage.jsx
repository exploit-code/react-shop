import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import CatalogCategoriesList from "../../components/CatalogCategoriesList/CatalogCategoriesList";
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
                    {data?.map((item) => (
                        <>
                            <h1>{item.attributes.title}</h1>
                        <CatalogCategoriesList cat={item.id}/>
                        </>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default CatalogPage;
