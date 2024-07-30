import {createBrowserRouter, Navigate} from "react-router-dom";
  import "./index.css";
import Inicio from "./pages/Inicio";
import LandingLayout from "./layouts/Landing";
  
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
          path:'*',
          element:<Inicio/>
      }
    ]
  },
  ]);
  