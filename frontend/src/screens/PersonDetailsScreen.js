import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, CardImg} from 'react-bootstrap'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listPersonDetails,savePersonDetails } from '../actions/personActions';
import {listMovieCredits} from '../actions/movieActions'
import axios from 'axios'
import ShowMoreText from "react-show-more-text";
import Movies from '../components/Movies'
import MoviesPerson from '../components/MoviesPerson';
const PersonDetailsScreen = ({match}) => {
    const size = 175
    const dispatch = useDispatch()
    const personDetails = useSelector(state => state.personDetails)
    const {person} = personDetails

    const movieCredits = useSelector(state => state.movieCredits)
    let temp =  []
    const {movieCreditsObj} = movieCredits
    console.log(movieCreditsObj)



    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        dispatch(listPersonDetails(id))
        dispatch(listMovieCredits(id))



    }, [dispatch, id])

    const tempPerson = {
        adult: person?.adult,
        alsoKnownAs: person?.also_known_as,
        biography: person?.biography,
        birthDay: person?.birthday,
        deadthDay: person?.deathDay || '',
        gender: person?.gender,
        homepage: person?.homepage,
        theMovieDbId: person.id,
        imdbId: person?.imdb_id,
        knownForDepartment: person?.known_for_department,
        name: person.name,
        placeOfBirth: person?.place_of_birth,
        popularity: person?.popularity,
        profilePath: person?.profile_path,
    }


    function savePeople() {
        console.log(tempPerson)
        dispatch(savePersonDetails(tempPerson))
    }

    function executeOnClick () {
        
    }
    

    function splitYear(date) {
        var date = new Date(date);
        return date.getFullYear();
    }


    return (
    <div>
        <Link className='btn btn-dark my-3' to = '/'>Go Back</Link>

        <Row>
            <Col md={3}>
            <Image src = {`https://image.tmdb.org/t/p/w300${person?.profile_path}`} variant = 'top'/>
            <ListGroup>
            <div style={{color: 'black'}}>
                 <h4>Personal Info</h4>

                <strong> Known For </strong>
                <p>{person?.known_for_department}</p>
           
                <strong>Known Credits</strong>
                <p>71</p>

                <strong> Gender </strong>
                <p>{person?.gender === 2 ? 'Male' : 'Female'}</p>

                <strong> Birthday </strong>
                <p> {person?.birthday}</p>

                <strong> Place of birth  </strong>
                <p>  {person?.place_of_birth}</p>
                
                <strong>   Also Known As  </strong>
                <p>    {person?.also_known_as}</p>
                
                <Button variant="info" className="me-2"  onClick={savePeople}>Login to Edit</Button>
                <p></p>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-keyboard" viewBox="0 0 16 16">
                <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"/>
                <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z"/>
                </svg> Keyboard Shortcuts
                <p></p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-exclamation" viewBox="0 0 16 16">
                <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                </svg> Login to report an issue
             
            </div>

            </ListGroup>
            </Col>







            <Col md={6}>
            <ListGroup>
            <div style={{color: 'black'}}>
                 <h2>{person?.name}</h2>
                 <h3>Biography</h3>
                 
                 <ShowMoreText
                /* Default options */
                lines={5}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                onClick={executeOnClick}
                expanded={false}
                width={880}
                truncatedEndingComponent={"... "}
            >
                  <p>{person?.biography}</p>

            </ShowMoreText>

              
            </div>


               <div style={{color: 'black'}}>
                 <h3> Known For</h3>
                 
                 <Row>
                {Object.keys(movieCreditsObj).length > 0 ? movieCreditsObj.map((movie,index) =>
                 (index < 6) ?
                 <Col
                 style={{width: '16%'}}
                 key = {movie.id} sm={12} md={6}lg={4} xl={3}
                 >
                  <MoviesPerson movie={movie} size={size} />
                 </Col>
                 : null
                ) : null }

           </Row>
                 
                

              
            </div>   

            <div style={{color: 'black'}}>
                 <h3>    Acting</h3>
                 
                <Row>
                    <ListGroup>
                {Object.keys(movieCreditsObj).length > 0 ? movieCreditsObj.map((movie,index) =>
               
                    <ListGroupItem>
                        <div style={{color: 'black'}}>
                            <ul className='style-ul-person'>
                                <li className='style-li-person'>
                                         {movie.release_date ?splitYear(movie.release_date) : '------'}
                                </li>

                                <li className='style-li-person'>
                                        <input type="radio" value="movie" name="movie"></input>
                                </li>

                                <li className='style-li-person'>
                                         {movie.title}
                                </li>

                                <li className='style-li-person'>
                                         {movie.character}
                                </li>

                            </ul>
                        </div>
                        </ListGroupItem>
               
                ) : null }
</ListGroup>
           </Row>
                 
                

              
            </div>   
         
          






      
            </ListGroup>

            </Col>




        </Row>


        
    </div>
    
    );
}
 
export default PersonDetailsScreen;