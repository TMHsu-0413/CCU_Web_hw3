import React from "react";

const Header = () => {
  return (
    <div className="h-96 w-screen flex flex-col justify-center items-center relative">
      <div className="bg-[url('image/background1.jpeg')] bg-center bg-cover h-100 w-100 absolute" ></div>
      <div className="text-center text-black z-10 p-5 rounded bg-gray-50/25 shadow">
        <h2 className="text-6xl">Blog</h2>
        <h2 className="text-3xl">My memory</h2>
      </div>
    </div>
  )
}

export default Header;
