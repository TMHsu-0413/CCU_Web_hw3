import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const ToLoginPage = () => {
    navigate("/Login");
  }
  const ToRegPage = () => {
    navigate("/Register");
  }
  return (
    <>
      <div className="h-screen flex justify-center items-center relative">
        <div className="w-100 h-100 blur-sm saturate-150 bg-[url('image/background.jpg')] bg-cover bg-no-repeat bg-center absolute"></div>

        <div className="text-center border-white gap-4 p-5 h-fit relative flex flex-col justify-center items-center">
          <div className="bg-black/60 w-100 h-100 absolute z-0 rounded"></div>

          <h2 className="text-white z-10 text-5xl">Life Blog</h2>
          <h2 className="text-white z-10 text-2xl">Share your happy life!</h2>
          <div className="flex z-10 justify-center gap-2">
            <Button variant="primary" onClick={ToLoginPage}>Login</Button>
            <Button variant="primary" onClick={ToRegPage}>Register</Button>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
};

export default Index;
