import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCofffee from './component/AddCofffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import Home from './component/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: "/addCoffee",
        element: <AddCofffee></AddCofffee>
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
