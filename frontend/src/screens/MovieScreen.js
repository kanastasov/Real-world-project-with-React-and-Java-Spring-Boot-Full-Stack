import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, CardImg} from 'react-bootstrap'
import movies from '../movies'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { fetchData } from '../util/helper';

const MovieScreen = ({match}) => {

    
        const [movie, setMovie] = useState([])
    
    
        useEffect(() => {
            const axiosMovies = async() => {
                const response = await fetchData(`movie/${id}`);
                console.log(response);
                setMovie(response);
            }
            axiosMovies();
    
        }, [])
    
    
    

    const {id} = useParams();
    console.log(id)

    return (
    <div>
        <Link className='btn btn-dark my-3' to = '/'>Go Back</Link>

        <Row>
            <Col md={6}>
            <CardImg src = {`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} variant = 'top'/>
            </Col>


            <Col md={3}>
            <ListGroup>
            <ListGroupItem>
                <h3>{movie?.title}</h3>
            </ListGroupItem>

            <ListGroupItem>
                <CircularProgressbar value={movie?.vote_average*10} text={`${movie?.vote_average*10}%`} />
            </ListGroupItem>

            <ListGroupItem>
              Production {movie?.production_companies?.map(genre =>
                (genre.name) + ', ')}
            </ListGroupItem>

            <ListGroupItem>
               Overview {movie?.overview}
            </ListGroupItem>

            <ListGroupItem>
               Status{movie?.status}
            </ListGroupItem>
            <ListGroupItem>
               Release Date{movie?.release_date}
            </ListGroupItem>

            <ListGroupItem>
              Genres {movie?.genres?.map(genre =>
                (genre.name) + ', ')}
            </ListGroupItem>

            <ListGroupItem>
              Duration {movie?.runtime}
            </ListGroupItem>
            </ListGroup>

            </Col>
        </Row>
    </div>
    
    );
}
 
export default MovieScreen;