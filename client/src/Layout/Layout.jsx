import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import UpMainPage from '../components/UpMainPage/UpMainPage'


const Layout = () => {
    return (
        <>
            <Header></Header>
            {/* <UpMainPage /> */}
            <main className='main container'>
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </>
    );
};

export default Layout;
