import {createBrowserRouter, Navigate} from "react-router-dom";
  import "./index.css";
import Inicio from "./pages/Inicio";
import LandingLayout from "./layouts/Landing";
import Nosotros from "./pages/Nosotros";
import Cataalogo from "./pages/Cataalogo";
import Contactanos from "./pages/Contactanos";
import CatalogLayout from "./layouts/Catalog";
import Login from "./pages/Login";
import AuthGuard from "./components/AuthGard";
import AdminHome from "./pages/AdminHome";
import AdminLayoutt from "./layouts/Admin";

  
export const router = createBrowserRouter([
   {
     path: '/',
     element: <Navigate to={'/inicio'} />,
   },
    {
      path: "/",
      element: <LandingLayout/>,
      children: [
        {
            path:'inicio',
            element:<Inicio/>
        },
        {
          path:'nosotros',
          element:<Nosotros/>
        },
        {
          path:'contactanos',
          element:<Contactanos/>
        },
        {
            path:'*',
            element:<Inicio/>
        }
      ]
    },
    {
      path:'/catalogo',
      element: <CatalogLayout/>,
      children: [
        {
          index: true,
          element: <Cataalogo/>
        }
      ]
    },
    
    {
      path:'/admin',
      element: <AuthGuard/>,
      children: [
        {
          path: '*',
          element: <Navigate to={'/admin'} />,
        },
        {
          path:'login',
          element: <Login/>
        },
        {
          path:'home',
          element: <AdminLayoutt/>,
          children: [
            {
              index: true,
              element: <AdminHome/>
            }
          ]
        }
      ]
    }
    
  ]);
  