import React, { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hcontent from "../components/Hcontent";
import Footer from "../components/Footer";
import FixedMenu from "../components/FixedMenu";

const Home = () => {
  return (
    <>
      <FixedMenu />
      <Header />
      <div className="flex">
        <Navbar />
        <Hcontent />
      </div>
      <Footer />
    </>
  )
}

export default Home;
