import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { Login } from "./pages/UserPages/Login";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Login />
    </Router>
  );
}

export default App;
