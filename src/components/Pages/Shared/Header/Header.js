import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import LeftNav from "../LeftNav/LeftNav";
import "./Header.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Header = () => {
  const { providerLogIn } = useContext(AuthContext);

  const googleHandle = () => {
    providerLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error("error", error));
  };

  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">Dragon News</Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to="/">Turoirals</Link>{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link to="/blog">Blog</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <div>
                <Button
                  onClick={googleHandle}
                  variant="outline-primary p-2 m-1"
                >
                  <FaGoogle />
                  Log in wiht Google
                </Button>
                <Button variant="outline-primary p-2 m-1">
                  <FaGithub />
                  Log in with Github
                </Button>
              </div>
              <Nav.Link>
                {user?.uid ? (
                  <div className="name">
                    <span>{user?.displayName}</span>
                    <Button onClick={handleLogout} varient="light">
                      Log Out
                    </Button>
                  </div>
                ) : (
                  <div className='log'>
                    <Link to="/login">Log In</Link>
                    <Link to="/register">Register</Link>
                  </div>
                )}
              </Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                {/* {user?.displayName} */}
              </Nav.Link>
              <Nav.Link eventKey={2}>
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user.photoURL}
                  />
                ) : (
                  <FaImage />
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none d-sm-block">
              <LeftNav />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
