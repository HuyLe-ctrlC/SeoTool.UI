import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";

function App() {
  return (
    <>
      {/* <LoginPage /> */}
      <RegisterPage />
    </>
  );
}

export default App;
