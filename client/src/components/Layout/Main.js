import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classNames from 'classnames';
import Catalog from '../Catalog/Catalog';
import FeaturedProducts from '../FeaturedProducts__back/FeaturedProducts'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className={classNames('container', 'main')}>{children}</main>
            <Catalog />
            <FeaturedProducts />
            <Footer />
        </>
    );
}

export default Layout;
