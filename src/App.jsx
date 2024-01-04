import { useState } from "react";
import "./styles/App.css";
import Home from "./containers/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
