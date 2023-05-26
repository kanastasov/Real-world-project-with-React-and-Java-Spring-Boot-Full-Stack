import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import { Col, CardImg, Row} from 'react-bootstrap'
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listMovieDetails } from '../actions/movieActions';
import {listTopBilledActors} from '../actions/personActions'
import {listReviews} from '../actions/reviewsActions'
import Reviews from '../components/Reviews'


const ReviewsScreen = ({match}) => {
    const type = 'movie'
    const size = 175
    const {id} = useParams();
    const dispatch = useDispatch()
    const movieDetails = useSelector(state => state.movieDetails)
    const {movie} = movieDetails



    const movieReviewsList = useSelector(state => state.movieReviewsList)
    const {movieReviews} = movieReviewsList
    
  console.log(movieReviews)






    useEffect(() => {
        dispatch(listMovieDetails(id))
        dispatch(listTopBilledActors(id))
        dispatch(listReviews(id,type))


    }, [dispatch, id])

 


    return (

         <>
            <div className='div-set'>
            <CardImg style={{height: '87px', width: '58px'}} src = {`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} variant = 'top'/>
         
             {movie.title} {movie.release_date}
        <p></p>
            <Link className='my-3' to = '/'>Go Back</Link>
            </div>
            <Row className="row-border-top circle-image">
            <div>                
            {movieReviews.map((review,index) =>
                 (index < 4) ?
                 // md={6} lg={4} xl={3}*/
                 <Col key = {review.id} sm={12} >
                    <Reviews review={review} size={size} />
                 </Col>
                 : null
                )}
              
             
            </div>
            </Row> 
            </>

     
  
    
    );
}
 
export default ReviewsScreen;