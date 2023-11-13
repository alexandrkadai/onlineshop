import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import ErrorPage from './Pages/ErrorPage';
import LookPage from './Pages/LookPage';

import './App.css';

function App() {
  const routes = createBrowserRouter([
    { path: '/', errorElement: <ErrorPage />, element: <MainPage /> },
    { path: '/contact', element: <ContactPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/look', element: <LookPage /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
