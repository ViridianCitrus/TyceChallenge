import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AIContext, useAIContext } from "./context/AIContext";
import { UserInput } from "./components/UserInput";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <AIContext.Provider value={useAIContext()}>
        <UserInput/>
      </AIContext.Provider>
    </>
  );
}

export default App;
