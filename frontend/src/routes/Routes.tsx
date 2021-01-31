import React from "react";
import { Router } from "@reach/router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ToDoList from "../pages/ToDoList";
import Registration from "../pages/Registration";
import MobXContext from "../store/MobXContext";
import ToDoStore from "../store/ToDoStore";

const Routes = () => (
  <MobXContext.Provider value={ToDoStore}>
    <Router>
      <Login path="/" />
      <Home path="/home" />
      <ToDoList path="/todolist/:todolistName" />
      <Registration path="/registration" />
    </Router>
  </MobXContext.Provider>
);

export default Routes;
