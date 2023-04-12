import React from "react";
import Index from "../pages/Index";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import User from "../pages/User";
import Task from "../pages/Task";
import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import Logout from "../pages/Logout";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/hw3">
      <Route index element={<Index />} />
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="Logout" element={<Logout />} />
      <Route path="Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="User/:name" element={<ProtectedRoute><User /></ProtectedRoute>} />
      <Route path="Task/:name" element={<ProtectedRoute><Task /></ProtectedRoute>} />
      <Route path="Task/:name/:id?" element={<ProtectedRoute><Task /></ProtectedRoute>} />
      <Route path="*" element={<Index />} />
    </Route>
  )
)

export default router;
