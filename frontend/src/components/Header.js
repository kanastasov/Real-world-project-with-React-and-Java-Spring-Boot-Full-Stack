import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">TheMovieDB</Navbar.Brand>
            <LinkContainer to ='/'> 
        <Navbar.Brand >Movies</Navbar.Brand>
     </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/api/movies">Movies</Nav.Link>
                <Nav.Link href="/api/tv">TV Shows</Nav.Link>

                <Nav.Link href="#features">People</Nav.Link>
                <Nav.Link href="https://www.themoviedb.org/">More</Nav.Link>
      
              </Nav>
              <Nav>
                <Nav.Link href="#deets">+</Nav.Link>
                <Nav.Link href="#deets">EN</Nav.Link>

                <Nav.Link href="#deets">Login</Nav.Link>

                <Nav.Link href="#deets">Join TMDB</Nav.Link>

                <Nav.Link href="#deets">Search</Nav.Link>

                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
 
export default Header;<h1>Header</h1>