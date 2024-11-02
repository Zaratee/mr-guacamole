import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { RouterProvider } from "react-router-dom";
import { router } from './routes';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className='!w-[100vw] !h-[100vh]'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
