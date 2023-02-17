import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from "./context/UserContext";
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './routes/PrivateRoute';
import Basket from './components/Basket/Basket';
import ProductsPage from "./pages/ProductsPage/ProductsPage";

import Catalog from "./components/Catalog/Catalog";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
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
            element: <ProductsPage />,
          },
          {
            path: '/productpage/:id',
            element: <ProductPage/>,
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
