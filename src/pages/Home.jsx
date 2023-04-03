import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hcontent from "../components/Hcontent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
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
