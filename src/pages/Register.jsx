import react, { useEffect, useState,useRef } from "react";
import { Form, Button,Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const conPasswordRef = useRef();
  const [state,setState] = useState({
    show:false,
    title:"",
    content:""
  })
  useEffect(() => {
    const Listener = e => {
      if (e.code === "Enter" && state.show === false) {
        e.preventDefault();
        handleSubmit();
      }
      else if (e.code === "Enter" && state.show === true){
        setState((prevState) => ({
          ...prevState,
          show:false
        }))
      }
    }
    document.addEventListener("keydown", Listener)
    return () => {
      document.removeEventListener("keydown", Listener)
    }
  })
  const handleSubmit = () => {
    var user = userRef.current.value
    var email = emailRef.current.value
    var password = passwordRef.current.value
    var conPassword = conPasswordRef.current.value

    setState(() => ({
      // if find duplicat user
      show:true,
      title:"Duplicate username!",
      content:"This user already exists!",
    }))
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f2f2f2]">
      <div className="w-72 h-60 left-1/2 top-1/2 fixed" style={{
        display:state.show?'inline-block':'none',
        transform:"translate(-50%,-50%)"
      }}>
        <Alert show={state.show} variant="danger" className="w-100 h-100 flex flex-col justify-evenly items-center">
          <Alert.Heading>{state.title}</Alert.Heading>
          <p>
            {state.content}
          </p>
          <div >
            <Button  onClick={() => setState((prevState) => ({
              ...prevState,
              show:false,
            }))}  variant="outline-danger">
              Close
            </Button>
          </div>
        </Alert>
      </div>

      <div className="w-96 rounded" style={{
        boxShadow:"rgba(0,0,0,0.1) 0px 5px 10px 0px"
      }}>
        <div className="py-5 bg-white w-100 flex flex-col justify-center items-center">
          <h2>Register</h2>
          <Form className="flex flex-col justify-center items-center">
            <Form.Group className="mb-3" controlId="formUser">
              <Form.Label>User</Form.Label>
              <Form.Control ref={userRef} className="max-w-xl" type="Text" placeholder="User" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label >Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label  >Confirm password</Form.Label>
              <Form.Control ref={conPasswordRef} type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Link to="/Login"><h2 className="text-sm">I already have an account!</h2></Link>
            <Button variant="primary" onClick={handleSubmit}>
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login;
