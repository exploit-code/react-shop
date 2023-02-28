import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

import PartWithBannersAndFilters from "../../components/PartWithBannersAndFilters/PartWithBannersAndFilters";
import Blog from '../../components/Blog/Blog';
import Catalog from "../../components/Catalog/Catalog";
import SearchTop from '../../components/SearchTop/SearchTop'
import Categories from "../../components/Categories/Categories";
import BannerMainPage from "../../components/BannerMainPage/BannerMainPage";

const HomePage = () => {
    return (
        <>
            <SearchTop />
            <BannerMainPage />
            <Categories />
            <PartWithBannersAndFilters />
            <Catalog />
            <Blog />
        </>
    );
};

export default HomePage;
