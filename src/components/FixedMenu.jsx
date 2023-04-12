import React from "react";
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const FixedMenu = () => {
  const cookies = new Cookies()
  const Navigate = useNavigate();
  const ID = cookies.get('ID')
  const Name = cookies.get('Name')

  const handleHome = () => {
    Navigate('/hw3/Home');
  }
  const handleLogout = () => {
    cookies.remove('ID', { path: '/hw3' })
    cookies.remove('Name', { path: '/hw3' })
    Navigate('/hw3/Logout')
  }
  const handleBlog = () => {
    Navigate('/hw3/User/' + Name)
  }
  const handlePost = () => {
    Navigate('/hw3/Task/' + Name)
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
        <Dropdown.Item disabled className="font-bold text-black text-xl">Hi {Name}</Dropdown.Item>
        <Dropdown.Item onClick={handleHome}>Home</Dropdown.Item>
        <Dropdown.Item onClick={handleBlog}>Blog</Dropdown.Item>
        <Dropdown.Item onClick={handlePost}>Post</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown >
  )
}

export default FixedMenu;
