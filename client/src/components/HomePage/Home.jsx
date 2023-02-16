import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';


import PartWithBannersAndFilters from "../PartWithBannersAndFilters/PartWithBannersAndFilters";
import Blog from '../Blog/Blog';
import Catalog from "../Catalog/Catalog";
import BannerMainPage from '../BannerMainPage/BannerMainPage'

const Home = () => {
    return (
        <div>
            <div className="contain" >
                <BannerMainPage />
                <PartWithBannersAndFilters />
                <Catalog />
                <Blog />
            </div>
        </div>
    );
};

export default Home;
