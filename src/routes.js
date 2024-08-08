import {createBrowserRouter, Navigate} from "react-router-dom";
  import "./index.css";
import Inicio from "./pages/Inicio";
import LandingLayout from "./layouts/Landing";
import Nosotros from "./pages/Nosotros";
import Cataalogo from "./pages/Cataalogo";
import Contactanos from "./pages/Contactanos";
import Tienda from "./pages/Tienda";
import Aguacate from "./pages/Aguacate";
import Productos from "./pages/Productos";
import NosotrosLayout from "./layouts/Nosotros";
  
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
        path:'cataalogo',
        element:<Cataalogo/>
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
    path: "/nosotros",
    element: <NosotrosLayout/>,
    children: [
      {
          path:'tienda',
          element:<Tienda/>
      },
      {
        path:'aguacate',
        element:<Aguacate/>
      },
      {
        path:'productos',
        element:<Productos/>
      },
      // {
      //     path:'*',
      //     element:<Inicio/>
      // }
    ]
  },
  ]);
  