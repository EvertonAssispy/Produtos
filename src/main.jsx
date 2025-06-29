import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/index.css'
import Produtos from './Pages/Produtos'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Estoque from './components/Estoque-components/Estoque'
import Layout from './Layout'
import Dashboard from './Pages/Dashboard-visao'
import Relatorio from './Pages/dashboard-relatorios'
import Historico from './Pages/Historico'
import Vendas from './Pages/Vendas'


const router = createBrowserRouter([
    {
    path: '/',
    element: <Layout />,         // Estrutura base do projeto
    children: [
      {
        path: 'produtos',
        element: <Produtos />
      },                     
      {   
        path: 'estoque',
        element: <Estoque />
      },
      {
        path:'dashboard/visao',
        element:<Dashboard/>
      },
      {
        path:'dashboard/relatorios',
        element: <Relatorio/>
      },
      {
        path: 'historico',
        element: <Historico/>
      },
      {
        path: 'Vendas',
        element:<Vendas/>
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
