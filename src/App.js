import React from "react";
import "./App.css";
import Home from "./components/firstPage.js";
import SecondPage from "./components/secondPage.js";
import ThirdPage from "./components/thirdPage.js";

function App() {
  return (
    <div className="App">
      <Home />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
