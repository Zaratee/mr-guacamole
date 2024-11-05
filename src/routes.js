import {createBrowserRouter, Navigate} from "react-router-dom";
  import "./index.css";
import Inicio from "./pages/Inicio";
import LandingLayout from "./layouts/Landing";
import Nosotros from "./pages/Nosotros";
import Cataalogo from "./pages/Cataalogo";
import Contactanos from "./pages/Contactanos";
import CatalogLayout from "./layouts/Catalog";
import Login from "./pages/Login";

  
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
      element:<Login/>
    }
    
  ]);
  