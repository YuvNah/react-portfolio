import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PortfolioContainer from "./components/PortfolioContainer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PortfolioContainer />
    </>
  );
}

export default App;
