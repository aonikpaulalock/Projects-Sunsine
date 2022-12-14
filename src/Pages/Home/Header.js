import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
// import loginUser from "../../Asset/Login/Login-User.png"
import { Link } from 'react-router-dom';
import "../../Styles/Header.css"
import auth from '../../Firebase.init';
const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav-heading text-white">
          Future School
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="Sheared-Color">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="Sheared-Color">About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="Sheared-Color">Services</Nav.Link>
            <Nav.Link as={Link} to="/reviews" className="Sheared-Color">Reviews</Nav.Link>
            <Nav.Link as={Link} to="/course" className="Sheared-Color">Courses</Nav.Link>
            {
              user?.displayName === null ?
                <h6 className="userDisplay-name">Rohit Sharma</h6> :
                <h6 className="userDisplay-name">{user?.displayName}</h6>
            }
            {!user ?
              <>
                <Nav.Link as={Link} to="/signin">
                  <button className="Sign-Login">Login</button>
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  <button className="Sign-Login">Signup</button>
                </Nav.Link>
              </> :
              <button className="logout-button" onClick={() => signOut(auth)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F58859" className="bi bi-box-arrow-right p-0" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg>
              </button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;