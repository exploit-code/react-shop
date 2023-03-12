import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from "./context/UserContext";
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './routes/PrivateRoute';
import Cart from './pages/Cart/Cart';
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import AboutAs from './components/AboutUs/AboutUs'
import AboutOurShop from './components/AboutOurShop/AboutOurShop'
import Catalog from './components/Catalog/Catalog'
import ProductPage from './pages/ProductPage/ProductPage'
import Contacts from './components/Contacts/Contacts'
import Favorites from "./pages/Favorites/Favorites";
import Post from './pages/PostPage/Post';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CatalogCategoriesList from "./components/CatalogPageList/CatalogPageList";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import Profile from './pages/Profile/Profile';

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
          path: '/cart',
          element: <Cart />,
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
          path: 'favorites',
          element: <Favorites />,
        },
        {
          path: '/products/:id',
          element: <ProductsPage />,
        },
        {
          path: '/productpage/:id',
          element: <ProductPage />,
        },

        {
          path: '/catalog',
          element: <Catalog />,
        },
        {
          path: '/aboutus',
          element: <AboutAs />,
        },
        {
          path: '/aboutourshop',
          element: <AboutOurShop />,
        },
        {
          path: '/contacts',
          element: <Contacts />,
        },
        {
          path: '/blog',
          element: <Post />,
        },
        {
          path: '/FP',
          element: <CatalogCategoriesList />,
        },
        {
          path: '/categories',
          element: <CatalogPage />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },

      ],
    },
  ])

  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
