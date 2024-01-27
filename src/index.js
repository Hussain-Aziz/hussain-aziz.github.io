import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdminDashboard from './components/pages/admin_dashboard/AdminDashboard';
import Lumafly from './components/pages/lumafly/Lumafly';
import EVCar from './components/pages/ev_car/EVCar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/Marshall",
    element: <AdminDashboard />,
  },
  {
    path: "/Lumafly",
    element: <Lumafly />,
  },
  {
    path: "/EVCar",
    element: <EVCar />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
