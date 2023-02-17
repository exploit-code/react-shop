import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

// import FeaturedProducts__back from "../FeaturedProducts__back/FeaturedProducts__back";
import Categories from "../Categories__back/Categories";
import PartWithBannersAndFilters from "../PartWithBannersAndFilters/PartWithBannersAndFilters";
import Blog from '../Blog/Blog';
import Catalog from "../Catalog/Catalog";
import BannerMainPage from '../BannerMainPage/BannerMainPage'
import UpMainPage from '../UpMainPage/UpMainPage'

const Home = () => {
    return (
        <>
            <UpMainPage />
            {/* <BannerMainPage /> */}
            <Categories />
            {/*<FeaturedProducts__back id="con1" type="latest" />*/}
            {/*<FeaturedProducts__back id="con2" type="top-rated" />*/}
            {/*<FeaturedProducts__back id="con3" type="review" />*/}
            {/*<FeaturedProducts__back type="featured" />*/}
            <PartWithBannersAndFilters />
            <Catalog />
            <Blog />
        </>
    );
};

export default Home;
