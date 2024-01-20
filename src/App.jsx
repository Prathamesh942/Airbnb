import { useState } from "react";
import "./styles/App.css";
import "./index.css";
import Home from "./containers/Home";
import StayPage from "./containers/StayPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/stay",
      element: <StayPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
