import axios from "axios";
import react, { useEffect, useState, useRef } from "react";
import { Form, Button, Alert, Nav } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate = useNavigate()
  const userRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const conPasswordRef = useRef();
  const [state, setState] = useState({
    show: false,
    title: "",
    content: ""
  })
  function password_weak(password) {
    var hasNumber = false
    var hasUpper = false
    var hasLower = false
    for (var i = 0; i < password.length; i++) {
      if (isNaN(parseInt(password[i])) && password[i] === password[i].toLowerCase())
        hasLower = true
      else if (isNaN(parseInt(password[i])) && password[i] === password[i].toUpperCase())
        hasUpper = true
      else if (!isNaN(parseInt(password[i])))
        hasNumber = true
    }
    return !(hasLower && hasUpper && hasNumber && password.length >= 8);
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    var user = userRef.current.value
    var email = emailRef.current.value
    var password = passwordRef.current.value
    var conPassword = conPasswordRef.current.value

    const sql_inj = (word) => {
      return word.includes('*') || word.includes('-') || word.includes('/');
    }

    async function duplicate() {
      let count = await axios.get(process.env.REACT_APP_API + 'getUserNumberbyName.php', { params: { "Name": user } })
      let data = parseInt(count.data[0]["Size"])
      console.log(data)
      return data >= 1;
    }

    if (password_weak(password)) {
      setState(() => ({
        // if find duplicat user
        show: true,
        title: "Registeration errors!",
        content: "The length of password should be at least 8 and include at least a capital letter, a lowercase letter, and a number.",
      }))
    }
    else if (password !== conPassword) {
      setState(() => ({
        // if find duplicat user
        show: true,
        title: "Registeration errors!",
        content: "Password and Confirm password fields were not matched.",
      }))
    }
    else if (sql_inj(user) || sql_inj(password) || sql_inj(email)) {
      setState(() => ({
        // if find duplicat user
        show: true,
        title: "Registration errors!",
        content: "SQL injection Problem.",
      }))
    }
    else if (await duplicate()) {
      setState(() => ({
        show: true,
        title: "Duplicate Username!",
        content: "The username already exists.",
      }))
    }
    // pass all constraints
    else {
      await axios.post(process.env.REACT_APP_API + 'Register.php', {
        name: user,
        email: email,
        password: password
      }).then(() => {
        Navigate("/Login")
      })
    }
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
          <h2>Register</h2>
          <Form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUser">
              <Form.Label>User</Form.Label>
              <Form.Control required ref={userRef} className="max-w-xl" type="Text" placeholder="User" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required ref={emailRef} type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label >Password</Form.Label>
              <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label  >Confirm password</Form.Label>
              <Form.Control required ref={conPasswordRef} type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Link to="/Login"><h2 className="text-sm">I already have an account!</h2></Link>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login;
