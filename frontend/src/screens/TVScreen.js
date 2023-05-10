import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, CardImg} from 'react-bootstrap'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listTvDetails } from '../actions/tvActions';

const TVScreen = ({match}) => {

    const dispatch = useDispatch()
    const tvDetails = useSelector(state => state.tvDetails)
    const {tv} = tvDetails
    const {id} = useParams();
    console.log(id)
        useEffect(() => {
            dispatch(listTvDetails(id))

    
        }, [dispatch])
    
    
    


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
    </div>
    
    );
}
 
export default TVScreen;