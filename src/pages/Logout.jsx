import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const Navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      Navigate('/hw3');
    }, 5000)
  })

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2>You will be signed out after five seconds</h2>
      <h2 className="text-2xl"><Link to="/hw3" className="no-underline text-xl">If you are not successly logged out, please click here</Link></h2>
    </div>
  )
}

export default Logout;
