import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './routes/PrivateRoute';
import Basket from './components/Basket/Basket';
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/basket',
                    element: <PrivateRoute><Basket /></PrivateRoute>
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: "/products/:id",
                    element: <Products />,
                },
                {
                    path: "/product/:id",
                    element: <Product />,
                },
            ]
        }
    ])
    return (
        <div className="app">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;