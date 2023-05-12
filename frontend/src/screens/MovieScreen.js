import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, CardImg} from 'react-bootstrap'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listMovieDetails,saveMovieDetails } from '../actions/movieActions';
import axios from 'axios'

const MovieScreen = ({match}) => {

    const dispatch = useDispatch()
    const movieDetails = useSelector(state => state.movieDetails)
    const {loading, error, movie} = movieDetails
    console.log(movie)
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        dispatch(listMovieDetails(id))


    }, [dispatch, id])



    const tempMovie = {
        name: movie.original_title,
        image: movie?.poster_path,
        overview: movie.overview,
        productionCompanies: movie.production_companies?.map(company => company.name),
        userScore : movie.vote_average*10,
        status: movie.status,
        genres: movie.genres?.map(genre => genre.name),
        duration: movie.runtime,
        theMovieDbId: movie.id,
        releaseDate: movie.release_date,

    }
    function saveMovies() {
        dispatch(saveMovieDetails(tempMovie))
    }
    


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

        <button className='btn btn-dark my-3'  onClick={saveMovies}>Edit Page</button>

        
    </div>
    
    );
}
 
export default MovieScreen;