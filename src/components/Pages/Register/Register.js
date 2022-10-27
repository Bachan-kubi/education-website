import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";


const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accept, setAccept]= useState(false);

    const navigate=useNavigate();

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const form= event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset();
            setError('');
            // navigate('/');
            handleUpdateUserProfile(name, photoURL);

            
        })
        .catch(error=>{
            console.error(error);
            setError(error.message);
        })
    }

    const handleAccepted = (event)=>{
      setAccept(event.target.checked);
    }

    const handleUpdateUserProfile=(name, photoURL)=>{
      const profile={
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error=>console.error(error))
    }

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            
            <label> Name </label><br/>
            <input name='name' type='text' placeholder='Name'></input><br/>
            <label> PhotoUrl </label><br/>
            <input name='photoURL' type='text' placeholder='pohotourl'></input><br/>
            <label> Email </label><br/>
            <input name='email' type='email' placeholder='email'></input><br/>
            <label> password </label><br/>
            <input name='password' type='password' placeholder='password'></input><br/>
            <input onClick={handleAccepted} name='checkbox' type='checkbox' placeholder='password'></input>
            <label>{<>Accept <Link to='/terms'>Terms and Conditions.</Link></>}</label><br/>
            <button className='btn btn-primary' disabled={!accept}>Register Now!</button>
            <p>{error}</p>
        </form>


      {/* <form onSumbit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register Now!
        </Button>
        <Form.Text className="text-danger">
          
        </Form.Text>
      </form> */}
    </div>
  );
};

export default Register;
