import React from "react";
import { Router } from "@reach/router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ToDoList from "../pages/ToDoList";

const Routes = () => (
  <Router>
    <Login path="/" />
    <Home path="/home" />
    <ToDoList path="/todolist/:todolistName" />
  </Router>
);

export default Routes;
