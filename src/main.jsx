import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCofffee from "./component/AddCofffee.jsx";
import UpdateCoffee from "./component/UpdateCoffee.jsx";
import Home from "./component/Home.jsx";
import SignUP from "./component/SignUP.jsx";
import SignIn from "./component/SignIn.jsx";
import AuthProvider from "./component/Provider/AuthProvider.jsx";
import Users from "./component/Users.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Users2 from "./component/Users2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCofffee></AddCofffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/signUp",
        element: <SignUP></SignUP>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/user"),
      },
      {
        path: "/users2",
        element: <Users2></Users2>,
      },
    ],
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
