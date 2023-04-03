import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown, Nav } from 'react-bootstrap';
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const FixedMenu = () => {
  const [userName, setUser] = useState(null)
  useEffect(() => {
    axios.get(process.env.REACT_APP_API + 'getUserbyID.php').then((res) => {
      setUser(res.data[0])
    })
  }, [])
  const Navigate = useNavigate();
  const cookies = new Cookies()
  const handleHome = () => {
    Navigate('/Home');
  }
  const handleLogout = () => {
    if (cookies.get('token') !== undefined)
      cookies.remove('token')
    Navigate('../')
  }
  const handleBlog = () => {
    const user = cookies.get('token')
    Navigate('/User/' + user)
  }
  const handlePost = () => {
    const user = cookies.get('token')
    Navigate('/Task/' + user)
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
