import React from "react";
import ReactDOM from "react-dom/client";
import { Title  , Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import {IMG_CDN_URL} from "./components/config"
import { RouterProvider, createBrowserRouter , Outlet } from "react-router-dom";
import About from "./components/about";
import Error from "./components/error";
import Contact from "./components/contact";
import Profile from "./components/profile";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>
  );
};

const appRouter = createBrowserRouter([
  // {
  //   path:"/", 
  //   element: <AppLayout/>, 
  //   errorElement: <Error/>
  // }, 
  // {
  //   path: "/about" , 
  //   element : <About/>
  // }
  {
    path: "/" , 
    element : <AppLayout/> , 
    errorElement : <Error/>, 
    children:[
      {
        path: "/", 
        element:<Body/>
      }, 
      {
        path: "/about", 
        element:<About/> , 
        children: [{
          path : "profile"  ,  // Dont write as /profile otherwise react will consider it as localhost:1234/profile, 
          element: <Profile/>
         }]
      }, 
      {
        path: "/contact", 
        element:<Contact/>
      }, 
      {
        path: "/restaurant/:id", 
        element:<RestaurantMenu/>
      }
    ]
  }
])

const roots = ReactDOM.createRoot(document.getElementById("root")); // manipulation

roots.render(<RouterProvider router={appRouter}/>);
