import { useState } from "react";
import "./styles/App.css";
import "./index.css";
import Home from "./containers/Home";
import StayPage from "./containers/StayPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home /> */}
      <StayPage />
    </>
  );
}

export default App;
