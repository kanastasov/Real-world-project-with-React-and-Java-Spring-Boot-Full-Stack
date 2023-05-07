import React from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import movies from '../movies'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';


const MovieScreen = ({match}) => {

    const {id} = useParams();

    console.log(id)
    const movie = movies.find(p => p._id === id)
    return (
    <div>
        <Link className='btn btn-dark my-3' to = '/'>Go Back</Link>

        <Row>
            <Col md={6}>
                <Image src={movie.image} alt ={movie.name} fluid />
            </Col>


            <Col md={3}>
            <ListGroup>
            <ListGroupItem>
                <h3>{movie.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
                <CircularProgressbar value={movie.userScore} text={`${movie.userScore}%`} />
            </ListGroupItem>

            <ListGroupItem>
              Director {movie.director}
            </ListGroupItem>

            <ListGroupItem>
               Overview {movie.overview}
            </ListGroupItem>

            <ListGroupItem>
               Status{movie.status}
            </ListGroupItem>
            <ListGroupItem>
               Release Date{movie.releaseDate}
            </ListGroupItem>

            <ListGroupItem>
              Genres {movie.ganres}
            </ListGroupItem>

            <ListGroupItem>
              Duration {movie.duration}
            </ListGroupItem>
            </ListGroup>

            </Col>
        </Row>
    </div>
    
    );
}
 
export default MovieScreen;