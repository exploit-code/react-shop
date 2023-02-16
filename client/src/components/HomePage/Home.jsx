import React, { useContext } from 'react';
import { useState } from 'react';


import PartWithBannersAndFilters from "../PartWithBannersAndFilters/PartWithBannersAndFilters";
import Blog from '../Blog/Blog';
import Catalog from "../Catalog/Catalog";
import BannerMainPage from '../BannerMainPage/BannerMainPage'
import UpMainPage from '../UpMainPage/UpMainPage';

const Home = () => {
    const [stateCategories, setstateCategories] = useState(false)

    const categoriesClick = () => {
        if (stateCategories) {
            setstateCategories(false)
        }
        else {
            setstateCategories(true)
        }
    }
    return (
        <div>
            <div className="contain" >
                <UpMainPage categoriesClick={categoriesClick} />
                <BannerMainPage stateCategories={stateCategories} />
                <PartWithBannersAndFilters />
                <Catalog />
                <Blog />
            </div>
        </div>
    );
};

export default Home;

