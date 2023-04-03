import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PrivateContent from "../components/PrivateContent";
import PublicContent from "../components/PublicContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

const User = () => {
  var isPrivate = true;
  return (
    <>
      <Header />
      <div className="flex">
        <Navbar />
        {isPrivate && <PrivateContent />}
        {!isPrivate && <PublicContent />}
      </div>
      <Footer />
    </>
  )
}

export default User;
