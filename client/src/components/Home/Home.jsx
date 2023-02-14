import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>This is home for {user?.email}</h2>
            <div className="contain" >
                <Categories/>
                <FeaturedProducts id="con1" type="latest"/>
                <FeaturedProducts id="con2" type="top-rated"/>
                <FeaturedProducts id="con3" type="review"/>
                <FeaturedProducts type="featured"/>
            </div>


        </div>
    );
};

export default Home;
