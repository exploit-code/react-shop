import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';


import PartWithBannersAndFilters from "../../components/PartWithBannersAndFilters/PartWithBannersAndFilters";
import Blog from '../../components/Blog/Blog';
import Catalog from "../../components/Catalog/Catalog";

import UpMainPage from '../../components/UpMainPage/UpMainPage'
// import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";

const HomePage = () => {
    return (
        <>
            {/*<Search />*/}
            <UpMainPage />
            <Categories />
            <PartWithBannersAndFilters />
            <Catalog />

            <Blog />
        </>
    );
};

export default HomePage;
