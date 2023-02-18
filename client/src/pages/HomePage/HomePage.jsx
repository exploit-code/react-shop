import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import Like from '../../components/Like/Like'


import PartWithBannersAndFilters from "../../components/PartWithBannersAndFilters/PartWithBannersAndFilters";
import Blog from '../../components/Blog/Blog';
import Catalog from "../../components/Catalog/Catalog";

import UpMainPage from '../../components/UpMainPage/UpMainPage'

const HomePage = () => {
    return (
        <>
            <UpMainPage />
            <Like />
            <PartWithBannersAndFilters />
            <Catalog />
            <Blog />
        </>
    );
};

export default HomePage;
