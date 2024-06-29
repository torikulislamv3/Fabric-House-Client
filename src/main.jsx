import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './error-page';
import Home from './home/Home';
import Items from './arts&crufts/Items';
import Register from './register/Register';
import Login from './login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import AddCraftsItem from './components/add craft and items/AddCraftsItem';
import MyListItems from './components/my list item/MyListItems';
import ViewDetails from './components/View Details/ViewDetails';
import PrivateRoute from './components/Private Route/PrivateRoute';
import UpdateItem from './components/updateItem/UpdateItem';
import AllCraftItems from './components/AllCraftItems';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('https://server-site-arts.vercel.app/Items')
      },
      {
        path: "/all_items",
        element:<AllCraftItems></AllCraftItems>,
        loader: ()=> fetch('https://server-site-arts.vercel.app/Items')
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addCraft",
        element: <AddCraftsItem></AddCraftsItem>
      },
      {
        path: "/myList",
        element: <PrivateRoute>
          <MyListItems></MyListItems>
        </PrivateRoute>,
        loader: ()=> fetch('https://server-site-arts.vercel.app/Items')
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
          </PrivateRoute>,
        loader: ({params})=> fetch(`https://server-site-arts.vercel.app/Items/${params.id}`)
       
      },
      {
        path: "/updateItem/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({params})=> fetch(`https://server-site-arts.vercel.app/Items${params.id}`)
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
