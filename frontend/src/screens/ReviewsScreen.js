import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, CardImg} from 'react-bootstrap'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listMovieDetails,saveMovieDetails } from '../actions/movieActions';
import {listTopBilledActors} from '../actions/personActions'
import {listReviews} from '../actions/reviewsActions'
import Reviews from '../components/Reviews'
import Person from '../components/Person'


const ReviewsScreen = ({match}) => {
    const size = 175
    const {id} = useParams();
    const dispatch = useDispatch()
    const movieDetails = useSelector(state => state.movieDetails)
    const {loading, error, movie} = movieDetails

    const actorsTopBilled = useSelector(state => state.actorsTopBilled)
    const {topBilledActors} = actorsTopBilled


    const movieReviewsList = useSelector(state => state.movieReviewsList)
    const {movieReviews} = movieReviewsList
    
  console.log(movieReviews)






    useEffect(() => {
        dispatch(listMovieDetails(id))
        dispatch(listTopBilledActors(id))
        dispatch(listReviews(id))


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
    
    if(movie?.author_details?.avatar_path != null){
      var tempAvatar = movie?.author_details?.avatar_path.substring(1);

  }

    return (

         <>
            <div>
            <CardImg style={{height: '87px', width: '58px'}} src = {`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} variant = 'top'/>
         
             {movie.title} {movie.release_date}

                 <Link className='btn btn-dark my-3' to = '/'>Go Back</Link>
            </div>

            <div>                
              {movieReviews.map((review,index) =>
                 (index < 4) ?
                 <Col
                 key = {review.id} sm={12} md={6}lg={4} xl={3}
                 >
                  <Reviews review={review} size={size} />
                 </Col>
                 : null
                )}
                
             
            </div>

            </>

     
  
    
    );
}
 
export default ReviewsScreen;