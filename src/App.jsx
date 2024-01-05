import { useState } from "react";
import "./styles/App.scss";
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
