import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from "./context/UserContext";
import Layout from './Layout/Layout';
import Home from './components/HomePage/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './routes/PrivateRoute';
import Basket from './components/Basket/Basket';
import Products from "./components/_backend_folder/ProductsPage_back/Products";

import Home_backend from "./components/HomePage/Home_backend";
import Catalog from "./components/Catalog/Catalog";
import Product_verstka from "./components/ProductPage/Product_verstka";
import Product from "./components/ProductPage/Product_verstka"


function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/back',
            element: <Home_backend />,
          },
          {
            path: '/basket',
            element: <Basket />,
          },
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
          {
            path: 'likes',
            element: <></>,
          },
          {
            path: '/products/:id',
            element: <Products />,
          },
          {
            path: '/product/:id',
            element: <Product />,
          },
          {
            path: '/productpage/:id',
            element: <Product_verstka />,
          },
          {
            path: '/catalog',
            element: <Catalog />,
          },
        ],
      },
    ])

    return (
        <div className="app">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
