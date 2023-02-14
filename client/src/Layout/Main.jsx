import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PartWithBannersAndFilters from '../components/PartWithBannersAndFilters/PartWithBannersAndFilters';


const Main = () => {
    return (
        <>
            <Header></Header>

            <main className='main container'>
                <Outlet></Outlet>
                <PartWithBannersAndFilters />
            </main>

            <Footer></Footer>
        </>
    );
};

export default Main;