import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './Pages/MainPage';


import './App.css'

function App() {
  
  const routes = createBrowserRouter([{path: '/', element: <MainPage/>}]);
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
