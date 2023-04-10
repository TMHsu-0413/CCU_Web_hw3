import React from "react";
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const cookies = new Cookies();

  const Middleware = async () => {
    const name = cookies.get('Name')
    const ID = cookies.get('ID')

    if (name === undefined || ID === undefined)
      return false;

    let res = await axios.get(process.env.REACT_APP_API + 'checkLogin.php', {
      params: {
        ID: ID,
        name: name
      }
    })

    return res.data[0]["Size"] === '1';
  }

  let isLogin = Middleware()

  if (!isLogin)
    return <Navigate to="/hw3/Login" />
  else
    return children

}

export default ProtectedRoute;
