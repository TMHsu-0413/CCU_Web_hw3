import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./AppContext"
import router from './route/router';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
