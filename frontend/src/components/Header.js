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
        <Navbar.Brand ></Navbar.Brand>
     </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

                <NavDropdown title="Movies" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/">Popular</NavDropdown.Item>
                  <NavDropdown.Item href="/api/nowPlaying">                    Now Playing              </NavDropdown.Item>
                  <NavDropdown.Item href="/api/upcoming">Upcoming</NavDropdown.Item>                  
                  <NavDropdown.Item href="/api/topRated">Top Rated</NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="TV Shows" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/api/tv">Popular</NavDropdown.Item>
                  <NavDropdown.Item href="/api/tv/airingToday">Airing Today</NavDropdown.Item>
                  <NavDropdown.Item href="/api/tv/upcoming">On TV</NavDropdown.Item>                  
                  <NavDropdown.Item href="/api/tv/topRated">Top Rated</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="People" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/api/people">Popular People</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="https://www.themoviedb.org/">Discussions</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.themoviedb.org/leaderboard">Leaderboard</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.themoviedb.org/talk">Support</NavDropdown.Item>                  
                  <NavDropdown.Item href="https://developer.themoviedb.org/docs">API</NavDropdown.Item>
                </NavDropdown>  
              </Nav>
              <Nav>
                <Nav.Link href="#deets">+</Nav.Link>
                <Nav.Link href="#deets">EN</Nav.Link>

                <Nav.Link href="/api/login">Login</Nav.Link>

                <Nav.Link href="/api/register">Join TMDB</Nav.Link>

                <Nav.Link href="#deets">Search</Nav.Link>

                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
 
export default Header;<h1>Header</h1>