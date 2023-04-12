import React, { useEffect, useState } from "react";
import { Navigate, useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [middle, setMiddle] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
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
      },[])

      return res.data[0]["Size"] === '1';
    }
    Middleware().then((isLogin) => {
      if (isLogin)
        setMiddle(children)
      else{
        alert("You haven't sign in, please sign in")
        setMiddle(<Navigate to="/hw3/Login" />)
      }
    })
  },[navigate])

  return middle
}

export default ProtectedRoute;
