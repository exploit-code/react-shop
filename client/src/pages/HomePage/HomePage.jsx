import React from 'react';
import PartWithBannersAndFilters from "../../components/PartWithBannersAndFilters/PartWithBannersAndFilters";
import Blog from '../../components/Blog/Blog';
import Catalog from "../../components/Catalog/Catalog";
// import SearchTop from '../../components/SearchTop/SearchTop'
import Categories from "../../components/Categories/Categories";
import BannerMainPage from "../../components/BannerMainPage/BannerMainPage";
import Carusel from '../../components/Carusel/Carusel';

const HomePage = () => {
    return (
        <>
            <BannerMainPage />
            <Categories />
            <Carusel />
            <PartWithBannersAndFilters />
            <Catalog />
            <Blog />
        </>
    );
};

export default HomePage;
