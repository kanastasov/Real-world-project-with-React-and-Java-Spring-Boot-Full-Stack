import React from 'react';
import {Card, CardImg} from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';

const TV = ({movie}) => {
    return (
        
        <Card className='my-3 p-3 rounded'>
            <a href={`/api/tv/${movie.id}`}>
        <CardImg src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} variant = 'top'/>
            </a>


    <Card.Body>
        <a href={`/api/tv/${movie.id}`}>
      <Card.Title as='div'>
        <strong>{movie.title}</strong>

      </Card.Title>

            </a>
            
        <Card.Text as ='div'>
        <div className='my-3'>
        <CircularProgressbar value = {movie.vote_average*10} text={`${movie.vote_average * 10}%`} />

        </div>


        <Card.Text as ='h4'>
        Vote Count {movie.vote_count}
        </Card.Text>




        <Card.Text as ='h5'>
        Popularity {movie.popularity}
        </Card.Text>


       

      



        </Card.Text>

</Card.Body>




        </Card>
        
        
        );
}
 
export default TV;