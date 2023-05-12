import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, CardImg} from 'react-bootstrap'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listTvDetails, saveTVDetails } from '../actions/tvActions';

const TVScreen = ({match}) => {

    const dispatch = useDispatch()
    const tvDetails = useSelector(state => state.tvDetails)
    const {tv} = tvDetails
    const {id} = useParams();
    console.log(id)
        useEffect(() => {
            dispatch(listTvDetails(id))

    
        }, [dispatch])
    


        const tempTV = {
            name: tv.name,
            posterPath: tv?.poster_path,
            overview: tv.overview,
            productionCompaniesTV: tv.production_companies?.map(company => company.name),
            voteAverage : tv.vote_average*10,
            voteCount: tv.vote_count,
            genres: tv.genres?.map(genre => genre.name),
            theMovieDbId: tv.id,
            originalName: tv.original_name,
            firstAirDate: tv.last_air_date,
    
        }
    
    
        function saveTV() {
            console.log(tempTV)
            dispatch(saveTVDetails(tempTV))

        }


    return (
    <div>
        <Link className='btn btn-dark my-3' to = '/'>Go Back</Link>

        <Row>
            <Col md={6}>
            <CardImg src = {`https://image.tmdb.org/t/p/w500${tv?.backdrop_path}`} variant = 'top'/>
            </Col>


            <Col md={3}>
            <ListGroup>
            <ListGroupItem>
                <h3>{tv?.title}</h3>
            </ListGroupItem>

            <ListGroupItem>
                <CircularProgressbar value={tv?.vote_average*10} text={`${tv?.vote_average*10}%`} />
            </ListGroupItem>

            <ListGroupItem>
              Production {tv?.production_companies?.map(genre =>
                (genre.name) + ', ')}
            </ListGroupItem>

            <ListGroupItem>
               Overview {tv?.overview}
            </ListGroupItem>

            <ListGroupItem>
               Status{tv?.status}
            </ListGroupItem>
            <ListGroupItem>
               Release Date{tv?.release_date}
            </ListGroupItem>

            <ListGroupItem>
              Genres {tv?.genres?.map(genre =>
                (genre.name) + ', ')}
            </ListGroupItem>

            <ListGroupItem>
              Duration {tv?.runtime}
            </ListGroupItem>
            </ListGroup>

            </Col>
        </Row>

        <button className='btn btn-dark my-3'  onClick={saveTV}>Edit Page</button>

    </div>
    
    );
}
 
export default TVScreen;