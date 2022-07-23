import React from "react";
import "./App.css"
import Inputs from "./Components/Inputs";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Inputs />
    </div>
  )
}

export default App