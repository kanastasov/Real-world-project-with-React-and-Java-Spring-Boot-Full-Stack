import React from 'react';
import {Card, CardImg} from 'react-bootstrap'

const MoviesPerson = ({movie}) => {
    return (
        
        <Card className='my-3 p-3 rounded'>
            <a href={`/movie/${movie?.id}`}>
        <CardImg src = {`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} variant = 'top'/>
            </a>


    <Card.Body>
        

        <a href={`/movie/${movie.id}`}>
      <Card.Title as='div'>
        <strong style={{color: 'black'}} >{movie?.original_title}</strong>
      </Card.Title>
        </a>
        </Card.Body>
        </Card>      
        );
}
 
export default MoviesPerson;