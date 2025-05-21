import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/index.css'
import Produtos from './Pages/Produtos'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Estoque from './components/Estoque-components/Estoque'
import Layout from './Layout'


const router = createBrowserRouter([
    {
    path: '/',
    element: <Layout />,         // Estrutura base do projeto
    children: [
      {
        path: 'produtos',
        element: <Produtos />
      },                         //  Rotas filhos que representam a renderizacao dentro do pai LAYOUT
      {   
        path: 'estoque',
        element: <Estoque />
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
