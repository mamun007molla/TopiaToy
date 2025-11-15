import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import ToyCards from "../Pages/ToyCards";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ToysDetails from "../Pages/ToysDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement:<div>Loading...</div>,
        errorElement:<div><h2>Failed to load data</h2></div>
      },
      {
        path: "/category/:id",
        element: <ToyCards />,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement:<div>Loading...</div>,
        errorElement:<div><h2>Failed to load data</h2></div>
      },
      {
        path: "/login",
        element: <Login />,
        errorElement:<div><h2>Failed to load data</h2></div>
      },
      {
        path: "/signup",
        element: <SignUp />,
        errorElement:<div><h2>Failed to load data</h2></div>    
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile/></PrivateRoute>,
        errorElement:<div><h2>Failed to load data</h2></div>
      },
      
    ],
    errorElement:<div><h2>404! Page Not Found</h2></div>
  },
  {
        path:'/toys/:id',
        element: <PrivateRoute><ToysDetails/></PrivateRoute>,
        loader:()=>fetch('/data.json'),
        hydrateFallbackElement:<div>Loading...</div>,
        errorElement:<div><h2>Failed to load data</h2></div>
      }
]);

export default router;
