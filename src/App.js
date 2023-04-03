import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import router from './route/router';

function App() {
  useEffect(() => {
    document.title = "Life Blog";
  }, [])
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
