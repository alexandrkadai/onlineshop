import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import ErrorPage from './Pages/ErrorPage';
import LookPage from './Pages/LookPage';
import OneProduct from './Pages/OneProduct';
import CartPage from './Pages/CartPage';
import ChecOutPage from './Pages/CheckOutPage';
import './App.css';

function App() {
  const routes = createBrowserRouter([
    { path: '/', errorElement: <ErrorPage />, element: <MainPage />, children: [
        {path: '/shirts', element: <OneProduct /> }
    ] },
    { path: '/contact', element: <ContactPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/look', element: <LookPage /> },
    {path: '/super', element: <OneProduct /> },
    {path: '/cart', element: <CartPage /> },
    {path: '/checkout', element: <ChecOutPage /> },

  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
