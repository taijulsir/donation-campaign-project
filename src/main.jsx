import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import DonationDetails from './Components/DonationDetails/DonationDetails';
import DonationItem from './Components/DonationItem/DonationItem';
import Errorpage from './Components/ErrorPage/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/category.json')
      },
      {
        path: '/donations/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/category.json')
      },
      {
        path: '/donation',
        element: <DonationItem></DonationItem>,
        loader: () => fetch('/category.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
