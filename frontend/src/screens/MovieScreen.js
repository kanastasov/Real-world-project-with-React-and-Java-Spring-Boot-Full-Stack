import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, CardImg} from 'react-bootstrap'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listMovieDetails,saveMovieDetails } from '../actions/movieActions';
import {listTopBilledActors} from '../actions/personActions'
import {listReviews} from '../actions/reviewsActions'
import {listRecomendation} from '../actions/recomendationActions'
import {listVideos} from '../actions/videoActions'
import Reviews from '../components/Reviews'
import Person from '../components/Person'
import Recomendation from '../components/Recomendation';
import Iframe from 'react-iframe'


const MovieScreen = ({match}) => {
    const youtubeKey = "http://www.youtube.com/embed/"
    const type = 'movie'
    const size = 175
    const {id} = useParams();
    const dispatch = useDispatch()
    const movieDetails = useSelector(state => state.movieDetails)
    const {loading, error, movie} = movieDetails

    const actorsTopBilled = useSelector(state => state.actorsTopBilled)
    const {topBilledActors} = actorsTopBilled


    const movieReviewsList = useSelector(state => state.movieReviewsList)
    const {movieReviews} = movieReviewsList

    const recomendation = useSelector(state => state.recomendation)
    const {recomendationData} = recomendation

    
    const video = useSelector(state => state.video)
    const {movieVideo} = video

    
    
  console.log(movieVideo)






    useEffect(() => {
        dispatch(listMovieDetails(id))
        dispatch(listTopBilledActors(id))
        dispatch(listReviews(id,type))
        dispatch(listRecomendation(id, type))
        dispatch(listVideos(id,type))
        



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


      <div style={{
            backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 10.5, 1), calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 10.5, 0.84) 50%, rgba(31.5, 31.5, 10.5, 0.84) 100%), url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`
      }}>


    
        <Row>
            <Col md={3}>

            <CardImg style={{height: '450px', width: '300px'}} src = {`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie?.backdrop_path}`} variant = 'top'/>


            </Col>


            <Col md={3}>
            <nav>
            <div>
                <h3>{movie?.title} (2023)</h3>
            </div>
            <div>
                <strong>D {movie?.release_date}  (BG). {movie?.genres?.map(genre => genre.name + ', ' || '')} {movie?.runtime} min </strong>
            </div>


              <ul className='style-ul'>

                
             <li className='style-li'>
             <div  style = {{height : '50px', width: '50px'}} >
                <CircularProgressbar value={movie?.vote_average*10} text={`${movie?.vote_average*10}%`} />
            </div>
             </li>
            <li className='style-li'> <div>UserScore</div></li>
            <li className='style-li'>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></li>
            <li className='style-li'> 
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg></li>
            <li className='style-li'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg></li>
            <li className='style-li'>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg></li>
            <li>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
</svg><Link>Play  </Link></li>
        
            </ul>  
            <div>
             
             <h4 style= {{fontStyle:'italic'}}>{movie?.tagline} </h4>
         </div>
            <h3>
               Overview 
            </h3>
            <strong>{movie?.overview}</strong>


            <div>
               {movie?.production_companies?.map(genre =>
                (genre.name) + ', ')} Production Companies
            </div>


          
            </nav>

            </Col>
        </Row>

        </div>

        <div className="flex pt-8">
            <div className="white-column">
            <h3>Top Billed Cast</h3>

            <Row className="row-border-top2">
                {topBilledActors.map((person,index) =>
                  (index < 8) ?
                  <Col
                  style={{width: '12%'}}
                  key = {person.id} sm={12} md={6}lg={4} xl={3}
                  >
                  <Person person={person} size={size} />
                  </Col>
                  : null
                )}

            </Row>
            </div>    

            <div className="grey-column">
            <div className="flex place-content-between pb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="30.4" height="30.4" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="30.4" height="30.4" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30.4" height="30.4" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="30.4" height="30.4" fill="currentColor" class="bi bi-infinity" viewBox="0 0 16 16">
                <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"/>
                </svg>
            </div>

            <div className="pb-2">
               <div className="font-bold">Status </div> {movie?.status}
            </div>
            <div className="pb-2">
            <div className="font-bold">Release Date </div> {movie?.release_date}
            </div>

            <div className="pb-2">
            <div className="font-bold">Genres</div>
              {movie?.genres?.map(genre =>
                (genre.name) + ', ')}   
            </div>
            <div className="pb-2">
            <div className="font-bold">Production</div>
              {movie?.production_companies?.map(genre =>
                (genre.name) + ', ')}
            </div>
            <div className="pb-2">
            <div className="font-bold">Duration</div>
              {movie?.runtime}
            </div>
          </div>
        </div>

   
        <div>
              <strong>Full Cast & Crew</strong>
              <Row className="row-border-top circle-image">
              <h3>Reviews</h3>
            
              {movieReviews.map((review,index) =>
                 (index < 1) ?
                 // md={6} lg={4} xl={3}*/
                 <Col key = {review.id} sm={12} >
                    <Reviews review={review} size={size} />
                 </Col>
                 : null
                )}

                <Link to={`/movie/${id}/review`}>
                    <Card.Title style={{color: 'black'}} as ='div'>
                        <strong>Read All Reviews</strong>
                    </Card.Title>
                </Link>
                
              </Row>
            </div>

            

            <div>
              <h3>Most popular</h3>
              <Row className="row-border-top">
            
              {movieVideo.map((movie,index) =>
                 (index < 1) ?
                 <Col
                 key = {movie.id} sm={12} md={6}lg={4} xl={3}
                 >
                  
              <Iframe url={youtubeKey + movie.key}
                      width="1840px"
                      height="300px"
                      id=""
                      className=""
                      display="block"
                      position="relative"/>
                            
                 </Col>
                 : null
                )}

            <Link to={`/movie/${id}/review`}>
                <Card.Title style={{color: 'black'}} as ='div'>
                    <strong>Read All Reviews</strong>
                </Card.Title>
            </Link>
                
              </Row>
            </div>

            <div>
              <h3>Recommendations</h3>
              <Row className="row-border-top recommendations">
            
              {recomendationData.map((recomendation,index) =>
                 (index < 4) ?
                 <Col
                 key = {recomendation.id} sm={12} md={6}lg={4} xl={3}
                 >
                  <Recomendation recomendation={recomendation} size={size} />
                 </Col>
                 : null
                )}

            <Link to={`/movie/${id}/review`}>
                <Card.Title style={{color: 'black'}} as ='div'>
                    <strong>Read All Reviews</strong>
                </Card.Title>
            </Link>
                
              </Row>
            </div>

        <button className='btn btn-dark my-3'  onClick={saveMovies}>Edit Page</button>

        
    </div>
    
    );
}
 
export default MovieScreen;