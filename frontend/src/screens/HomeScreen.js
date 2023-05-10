import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import movies from '../movies'
import Movies from '../components/Movies';
import axios from 'axios'
import { fetchData } from '../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../actions/movieActions';

const HomeScreen = () => {
    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movieList)
    const {movies} = movieList

    useEffect(() => {
        dispatch(listMovies())


    }, [dispatch])



    return (
       <>
        Latest Movies

        <Row>
            {movies.map(movie => (
                <Col key={movie.id} sm={12} md={4} lg={4}xl={3}>
                    <Movies movie={movie} />
                </Col>
            ))}

        </Row>
       
       </>
        
        
        );
}
 
export default HomeScreen;