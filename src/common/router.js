import React from 'react';
import '../index.css';
import App from '../App.js'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp';
import ErrorPage from '../errors/ErrorPage';
import { ProtectedRoute } from '../guards/ProtectedRoute';
import { AuthProtectedRoute } from '../guards/AuthProtectedRoute';
import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login';
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <App />,
          children: [
            {
              path: '/',
              element: <Navigate to="/home" replace/>,
            },
            { path: "/home", element: <Home /> },
          ],
          
        }
      ],
      errorElement: <ErrorPage />
    },
    {
      element: <AuthProtectedRoute />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/sign-up',
          element: <SignUp />
        },
      ]
    }
  
  ]);

  export default router;