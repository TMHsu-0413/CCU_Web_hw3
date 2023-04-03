import axios from "axios";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_API + 'getUser.php')
      .then((res) => {
        res.data.map((data) => {
          var newObj = { ID: data.ID, Name: data.Name }
          setUser((prevUser) =>
            [...prevUser, newObj]
          )
        })
      })
  }, [])
  return (
    <div className="flex flex-col text-white gap-3 justify-start min-w-fit items-center bg-[#623e2f] p-5">
      <h2 className="font-bold text-4xl mb-3">Our Users</h2>
      {user.map((data) => {
        return <Link to={"/User/" + data.ID} className="no-underline text-white hover:bg-[#6e6e6e] hover:text-black"><h2 className="text-2xl px-5 py-2">{data.Name}</h2></Link>
      })}
    </div>
  )
}

export default Navbar;
