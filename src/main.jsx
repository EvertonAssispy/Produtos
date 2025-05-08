import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/index.css'
import Produtos from './Produtos'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Produtos />,
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
