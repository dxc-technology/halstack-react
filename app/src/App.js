import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DxcButton } from "@diaas/dxc-react-cdk";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DxcButton label="sergsergser"></DxcButton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
