import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, CardImg} from 'react-bootstrap'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listPersonDetails,savePersonDetails } from '../actions/personActions';
import axios from 'axios'

const PersonDetailsScreen = ({match}) => {

    const dispatch = useDispatch()
    const personDetails = useSelector(state => state.personDetails)
    const {person} = personDetails


    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        dispatch(listPersonDetails(id))


    }, [dispatch, id])



    const tempMovie = {
        name: person.original_title,
        image: person?.poster_path,
        overview: person.overview,
        productionCompanies: person.production_companies?.map(company => company.name),
        userScore : person.vote_average*10,
        status: person.status,
        genres: person.genres?.map(genre => genre.name),
        duration: person.runtime,
        thepMovieDbId: person.id,
        releaseDate: person.release_date,

    }
    function savePeople() {
        dispatch(savePersonDetails(tempMovie))
    }
    


    return (
    <div>
        <Link className='btn btn-dark my-3' to = '/'>Go Back</Link>

        <Row>
            <Col md={6}>
            <Image src = {`https://image.tmdb.org/t/p/w300${person?.profile_path}`} variant = 'top'/>
            </Col>


            {/* adult: false,
also_known_as: [ ],
biography: "",
birthday: "1995-11-26",
deathday: null,
gender: 1,
homepage: null,
id: 2412232,
imdb_id: null,
known_for_department: "Acting",
name: "Şifanur Gül",
place_of_birth: "Ankara, Türkiye",
popularity: 132.065,
profile_path: "/5xzZlvropBfdcq4E4auoM2xV0EN.jpg" */}




            <Col md={3}>
            <ListGroup>
            <ListGroupItem>
                <h3>{person?.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
            <p>{person?.biography}</p>
            </ListGroupItem>



            <ListGroupItem>
               Known For {person?.known_for_department}
            </ListGroupItem>

            <ListGroupItem>
               Known Credits{person?.credits}
            </ListGroupItem>
            <ListGroupItem>
               Gender {person?.gender === 2 ? 'Male' : 'Female'}
            </ListGroupItem>

            <ListGroupItem>
              Birthday {person?.birthday}
            </ListGroupItem>

            
            <ListGroupItem>
              Place of birth {person?.place_of_birth}
            </ListGroupItem>

            <ListGroupItem>
            Also Known As {person?.also_known_as}
            </ListGroupItem>

      
            </ListGroup>

            </Col>
        </Row>

        <button className='btn btn-dark my-3'  onClick={savePeople}>Edit Page</button>

        
    </div>
    
    );
}
 
export default PersonDetailsScreen;