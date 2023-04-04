import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const FixedMenu = () => {
  const [userName, setUser] = useState(null)
  const cookies = new Cookies()
  const Navigate = useNavigate();
  const ID = cookies.get('token')

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(process.env.REACT_APP_API + 'getUserbyID.php', { params: {ID: ID}})
      setUser(res.data[0]["Name"])
    }
    fetchData()
  },[])

  const handleHome = () => {
    Navigate('/Home');
  }
  const handleLogout = () => {
    cookies.remove('token')
    Navigate('../')
  }
  const handleBlog = () => {
    Navigate('/User/' + ID)
  }
  const handlePost = () => {
    Navigate('/Task/' + ID)
  }
  return (
    <Dropdown style={{
      position: 'fixed',
      zIndex: 999,
      top: 20,
      right: 20
    }}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item disabled className="font-bold text-black text-xl">Hi {userName}</Dropdown.Item>
        <Dropdown.Item onClick={handleHome}>Home</Dropdown.Item>
        <Dropdown.Item onClick={handleBlog}>Blog</Dropdown.Item>
        <Dropdown.Item onClick={handlePost}>Post</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown >
  )
}

export default FixedMenu;
