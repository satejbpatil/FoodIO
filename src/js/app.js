import React, { useLayoutEffect } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./about";
import Contact_us from "./contact_us";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu"
// import a Header Elements
import Header from "./Header";

// Import Body Element
import Body from "./Body";

const AppLayout = () => {
  return (
    <div id="main-container">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:
      [
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact_us",
          element:<Contact_us/>
        },
        {
          path:"/restaurant/:id",
          element:<RestaurantMenu/>
        }
      ],
  },
  
])
let root = ReactDOM.createRoot(document.getElementById("main"));
// root.render(<About/>);
root.render(<RouterProvider router={appRouter}/>);

