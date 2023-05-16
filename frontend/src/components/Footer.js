import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
const Footer = () => {
    return ( 
        <footer className='footer'>
            <nav className='footer nav '>


            <div>


            <Image src={'/images/theMoviedb.jpg'} alt="The Movie Database (TMDB)" width="160" height="124" />
            <a   className='footer nav a.rounded' href="/api/register">Join the Community</a>
            </div>

            <div>
                <h3>THE BASICS</h3>
                <ul>
                    <li>About TMDB</li>
                    <li>Contact Us</li>
                    <li>Support Forums</li>
                    <li>API</li>
                    <li>System Status</li>

                </ul>
            </div>

            <div>
                <h3>GET INVOLVED</h3>
                <ul>
                    <li>Contribution Bible</li>
                    <li>Add New Movie</li>
                    <li>Add New TV Show</li>
                </ul>
            </div>

            <div>
                <h3>COMMUNITY</h3>
                <ul>
                    <li>Guidelines</li>
                    <li>Discussions</li>
                    <li>Leaderboard</li>
                    <li>Twitter</li>
                </ul>
            </div>

            <div>
                <h3>LEGAL</h3>
                <ul>
                    <li>Terms of Use</li>
                    <li>API Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            </nav>
        </footer>

     );
}
 
export default Footer;