import React from "react";

const Navbar = () => {
  const Users = ["abc","bc","ds"]
  return (
    <div className="flex flex-col text-white gap-3 justify-start min-w-fit items-center bg-[#623e2f] p-5">
      <h2 className="font-bold text-4xl mb-3">Our Users</h2>
      {Users.map((val) => {
        return <h2 className="text-2xl">{val}</h2>
      })}
    </div>
  )
}

export default Navbar;
