import { useState } from "react";
import "./styles/App.css";
import "./index.css";
import Home from "./containers/Home";
import StayPage from "./containers/StayPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Booking from "./containers/Booking";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/stay/:id",
      element: <StayPage />,
    },
    {
      path: "/book",
      element: <Booking />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
