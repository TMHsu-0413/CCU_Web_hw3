import React from "react";
import Index from "../pages/Index";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import User from "../pages/User";
import Task from "../pages/Task";
import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Index />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/User/:id" element={<User />} />
      <Route path="/Task" element={<Task />} />
    </Route>
  )
)

export default router;
