import React from "react";
import { useState } from "react";
import { useContext } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const {signIn}= useContext(AuthContext);
  const [error, setError]= useState('');

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const navigate = useNavigate()

  const handleLogin=(event)=>{
    event.preventDefault();
    const form= event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result=>{
        const user = result.user;
        console.log(user)
        form.reset();
        setError('');
        navigate(from, {replace: true});
    })
    .catch(error=>{
      console.error('error', error);
      setError(error.message);
    })
}
  return (
    <div>
      <form onSubmit={handleLogin}>
            <label> Email </label><br/>
            <input name='email' type='email' placeholder='email' required></input><br/>
            <label> password </label><br/>
            <input name='password' type='password' placeholder='password' required></input><br/>
            <button className='btn btn-primary'>Log In</button>
            <p>
              {error}
            </p>
        </form>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
      </Form> */}
    </div>
  );
};

export default Login;
