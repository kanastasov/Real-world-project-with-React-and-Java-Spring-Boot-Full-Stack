import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar variant='dark' className = 'color-change'>
          <Container>
            <Navbar.Brand className = 'nav-dropdown' href="/">TheMovieDB</Navbar.Brand>
            <LinkContainer to ='/'> 
            <Navbar.Brand ></Navbar.Brand>
           </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

                <NavDropdown  className = 'nav-dropdown' title="Movies" id="collapsible-nav-dropdown1">
                  <NavDropdown.Item href="/">Popular</NavDropdown.Item>
                  <NavDropdown.Item href="/api/nowPlaying">                    Now Playing              </NavDropdown.Item>
                  <NavDropdown.Item href="/api/upcoming">Upcoming</NavDropdown.Item>                  
                  <NavDropdown.Item href="/api/topRated">Top Rated</NavDropdown.Item>
                </NavDropdown>


                <NavDropdown className = 'nav-dropdown' title="TV Shows" id="collapsible-nav-dropdown2">
                  <NavDropdown.Item href="/api/tv">Popular</NavDropdown.Item>
                  <NavDropdown.Item href="/api/tv/airingToday">Airing Today</NavDropdown.Item>
                  <NavDropdown.Item href="/api/tv/on-the-air">On TV</NavDropdown.Item>                  
                  <NavDropdown.Item href="/api/tv/topRated">Top Rated</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown className = 'nav-dropdown'  title="People" id="collapsible-nav-dropdown3">
                  <NavDropdown.Item href="/api/people">Popular People</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className = 'nav-dropdown' title="More" id="collapsible-nav-dropdown4">
                  <NavDropdown.Item href="https://www.themoviedb.org/">Discussions</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.themoviedb.org/leaderboard">Leaderboard</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.themoviedb.org/talk">Support</NavDropdown.Item>                  
                  <NavDropdown.Item href="https://developer.themoviedb.org/docs">API</NavDropdown.Item>
                </NavDropdown>  
              </Nav>
              <Nav>
                <Nav.Link className = 'nav-dropdown'  href="#deets">+</Nav.Link>
                <Nav.Link className = 'nav-dropdown'  href="#deets">EN</Nav.Link>

                <Nav.Link className = 'nav-dropdown'   href="/api/login">Login</Nav.Link>

                <Nav.Link className = 'nav-dropdown'  href="/api/register">Join TMDB</Nav.Link>

                <Nav.Link className = 'nav-dropdown'  href="#deets">Search</Nav.Link>

                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
 
export default Header;