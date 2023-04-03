import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./AppContext"
import router from './route/router';

function App() {
  useEffect(() => {
    document.title = "Life Blog";
  }, [])
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
