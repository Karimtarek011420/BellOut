import React from 'react'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './Components/Blog/Blog'
import Product from './Components/Productdatilas/Product'

 const router= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {path:'/BellOut',element:<Blog/>},
    {path:'/',element:<Blog/>},
    {path:'/blog',element:<Blog/>},
    {path:'/product',element:<Product/>},
  ]}
])


export default function App() {
  return <>
  <RouterProvider router={router}>

  </RouterProvider>
  </>
}
