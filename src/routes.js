import {createBrowserRouter, Navigate} from "react-router-dom";
  import "./index.css";
import Inicio from "./pages/Inicio";
import LandingLayout from "./layouts/Landing";
import Nosotros from "./pages/Nosotros";
import Cataalogo from "./pages/Cataalogo";
import Contactanos from "./pages/Contactanos";

  
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
  
  ]);
  