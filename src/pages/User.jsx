import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PrivateContent from "../components/PrivateContent";
import PublicContent from "../components/PublicContent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import FixedMenu from "../components/FixedMenu";

const User = () => {
  const params = useParams()
  var cookies = new Cookies()
  var isPrivate = params.name === cookies.get('Name')?true:false;

  return (
    <>
      <FixedMenu />
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
