import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import About from './Components/Pages/About/About.jsx';
import Services from './Components/Pages/Services/Services.jsx';
import Reviews from './Components/Pages/Reviews/Reviews.jsx';
import Routes from './Routes/Routes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes/>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
