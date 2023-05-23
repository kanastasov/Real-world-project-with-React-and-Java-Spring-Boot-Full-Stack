import React from 'react';
import {Card, CardImg} from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';

const Movies = ({movie}) => {
    return (
        
        <Card className='my-3 p-3 rounded'>
            <a href={`/movie/${movie?.id}`}>
        <CardImg src = {`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} variant = 'top'/>
            </a>


    <Card.Body>
        
        <div className='my-3' style = {{height : '50px', width: '50px'}}>
         <CircularProgressbar   value={movie?.vote_average * 10} text={`${movie?.vote_average * 10}%`} />
        </div>
        

        <a href={`/movie/${movie.id}`}>
      <Card.Title as='div'>
        <strong style={{color: 'black'}} >{movie?.original_title}</strong>
      </Card.Title>
        </a>
        <Card.Text style={{color: 'grey'}} as ='h4'>
        {movie?.release_date}
        </Card.Text>

            
        <Card.Text as ='div'>
       
        </Card.Text>

</Card.Body>




        </Card>
        
        
        );
}
 
export default Movies;