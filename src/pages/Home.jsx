import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hcontent from "../components/Hcontent";
import Footer from "../components/Footer";
import Cookies from "universal-cookie";
import FixedMenu from "../components/FixedMenu";

const Home = () => {
  const cookies = new Cookies();
  console.log(cookies.get('token'))
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
