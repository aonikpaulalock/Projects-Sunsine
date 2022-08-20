import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import AuthenticationProvider from './AuthenticationProvider';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import loginImage from '../../Asset/Login/login.png'
import auth from '../../Firebase.init';
import "../../Styles/Form.css"
import { Link } from 'react-router-dom';
const Signup = () => {
  const [error, setError] = useState('')
  const [updateProfile] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const handleSubmit = async event => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value
    const confirmPassword = event.target.confirmPassword.value
    console.log(email, password);

    if (password !== confirmPassword) {
      setError("Don't match password")
      return;
    }

    if (password.length < 8) {
      setError(" Minimum type eight charchter ")
      return;
    }
    createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name })
    event.target.reset()
    user.reload()
  }

  if (user) {
    console.log(user);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Form className="form-container" onSubmit={handleSubmit}>
            <h2 className="heding-signup">Create Account</h2>
            <Form.Group className="input-name">
              <Form.Control type="text" name="name" placeholder="Your Name"
                className="input"
                required
                autoComplete='off'
              />
            </Form.Group>
            <Form.Group className="input-name">
              <Form.Control type="email" name="email" placeholder="Enter Email"
                className="input"
                required
                autoComplete='off'
              />
            </Form.Group>
            <Form.Group className="input-name">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                className="input"
                required />
            </Form.Group>
            <Form.Group className="input-name">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input"
                required />
            </Form.Group>
            <h6 className='text-center text-danger mt-3 mb-0 fs-5'>{error}</h6>
            <button type="submit" className="Signup-Button">Sign up</button>
            <AuthenticationProvider />
          </Form>
        </div>
        <div className="col-lg-6 d-flex  flex-column justify-content-center align-items-center">
          <h5 className="acount-heading">Create Have An Account ?
            <Link to="/signin"> Signup</Link>
          </h5>
          <img src={loginImage} alt="" className="img-fluid" />
          <p className="Privacy-policy">By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;