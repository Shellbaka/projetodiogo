import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from './pages/home/Home.jsx';
import CriarConta from './pages/conta/CriarConta.jsx';
import Login from './pages/login/Login.jsx';
import Score from './pages/score/Score.jsx';
import Sobre from './pages/sobre/Sobre.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/inicio" replace />,
      },
      {
        path: "/inicio",
        element: <Home />,
      },
      {
        path: "/conta",
        element: <CriarConta />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/score",
        element: <Score />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);