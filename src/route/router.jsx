import React from "react";
import Index from "../pages/Index";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { Route,createRoutesFromElements,createBrowserRouter } from "react-router-dom";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Index />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    )
  )

  export default router;
