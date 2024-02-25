import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../AddService/AddService";
import MyService from "../MyService/MyService";
import MyShedules from "../MyShedules/MyShedules";
import Dashboard from "../Dashboard/Dashboard";
import Services from "../Services/Services";
// import Header from "../Header/Header";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('http://localhost:4000/services')
         },
        // {
        //     path:'/header',
        //     element:<Header></Header>
        // }
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path:'/services',
          element:<Services></Services>,
          loader:()=>fetch('http://localhost:4000/services')
     
        },

        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/addService',
            element:<AddService></AddService>
        },
        {
            path:'/myService',
            element:<PrivateRoute><MyService></MyService></PrivateRoute>
        },
        {
            path:'/myShedules',
            element:<PrivateRoute><MyShedules></MyShedules></PrivateRoute>
        }

      ]
    },
  ]);

export default router;