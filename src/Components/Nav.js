import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


function NavigationBar() {
  // const [token, setToken] = useState()

  // if (!token) {
  //   return <LogInPage setToken={ setToken}/>
  //   }
  // const auth = useLoginAuth()
  return (
    // <LoginAuthProvider>

      <>
        {["sm"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3 py-3">
            <Container fluid>
              <Navbar.Brand as={Link} to="/">
                Pomodoro Buddy
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/">
                      Home
                    </Nav.Link>

                    <Nav.Link as={Link} to="/Login">
                      Log In
                    </Nav.Link>

                    <Nav.Link as={Link} to="/Dashboard">
                      Dashboard
                    </Nav.Link>
                    <NavDropdown
                      title="More"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item as={Link} to="/FAQ">
                        FAQ
                      </NavDropdown.Item>
                      {/* <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item> */}
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        
      </>

    // </LoginAuthProvider>
  );
}

export default NavigationBar;
