import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home/Home'
import Main from '../Main/Main'
import AddProduct from '../AddProduct/AddProduct'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Notfound from '../Notfound/Notfound'

export default function App() {

    const router = createBrowserRouter([
        {path:'',element:<Main/>,children:[
            {index:true,element:<Home/>},
            {path:'add',element:<AddProduct/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            {path:'*',element:<Notfound/>}
        ]}
    ])
  return <>
    <RouterProvider router={router}/>
  </>
}