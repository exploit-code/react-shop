import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

import FeaturedProducts from "../FeaturedProducts__back/FeaturedProducts";
import Categories from "../Categories__back/Categories";
import PartWithBannersAndFilters from "../PartWithBannersAndFilters/PartWithBannersAndFilters";
import BuyTogether from '../BuyTogether/BuyTogether'
import Blog from '../Blog/Blog';

const Home_backend = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="contain" >
                <h2>welcome {user?.email}</h2>
                <Categories />
                <FeaturedProducts id="con1" type="latest" />
                <FeaturedProducts id="con2" type="top-rated" />
                <FeaturedProducts id="con3" type="review" />
                <FeaturedProducts type="featured" />
            </div>

        </div>
    );
};

export default Home_backend;
