import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { SHA3 } from 'crypto-js';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const Navigate = useNavigate();
  const cookies = new Cookies();
  const [state, setState] = useState({
    show: false,
    title: "",
    content: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    var user = userRef.current.value
    var password = passwordRef.current.value

    const sql_inj = (word) => {
      return word.includes('*') || word.includes('-') || word.includes('/');
    }

    async function foundUser() {
      var encrypted_password = SHA3(password).toString()

      let valid = await axios.post(process.env.REACT_APP_API + 'Login.php', {
        name: user,
        password: encrypted_password
      })

      if (valid.data.length === 1) {
        cookies.set('ID', valid.data[0]["ID"]);
        cookies.set('Name', valid.data[0]["Name"]);
        Navigate("/hw3/Home")
      }
      else {
        setState(() => ({
          show: true,
          title: "Failed login!",
          content: "Username or password is wrong.",
        }))
      }
    }

    if (sql_inj(user) || sql_inj(password)) {
      setState(() => ({
        show: true,
        title: "Login errors!",
        content: "SQL injection problems.",
      }))
    }
    foundUser()
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f2f2f2]">
      <div className="w-72 h-60 left-1/2 top-1/2 fixed" style={{
        display: state.show ? 'inline-block' : 'none',
        transform: "translate(-50%,-50%)"
      }}>
        <Alert show={state.show} variant="danger" className="w-100 h-100 flex flex-col justify-evenly items-center">
          <Alert.Heading>{state.title}</Alert.Heading>
          <p>
            {state.content}
          </p>
          <div >
            <Button onClick={() => setState((prevState) => ({
              ...prevState,
              show: false,
            }))} variant="outline-danger">
              Close
            </Button>
          </div>
        </Alert>
      </div>

      <div className="w-96 rounded" style={{
        boxShadow: "rgba(0,0,0,0.1) 0px 5px 10px 0px"
      }}>
        <div className="py-5 bg-white w-100 flex flex-col justify-center items-center">
          <h2>Login</h2>
          <Form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUser">
              <Form.Label>User</Form.Label>
              <Form.Control required ref={userRef} className="max-w-xl" type="Text" placeholder="User" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/hw3/Register"><h2 className="text-sm">Register a new membership</h2></Link>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login;
