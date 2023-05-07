import React from 'react';
import {Card, CardImg} from 'react-bootstrap'

const Movies = ({movie}) => {
    return (
        
        <Card className='my-3 p-3 rounded'>
            <a href={`/movie/${movie._id}`}>
        <CardImg src = {movie.image} variant = 'top'/>

            </a>


<Card.Body>
<a href={`/movie/${movie._id}`}>
      <Card.Title as='div'>
        <strong>{movie.title}</strong>

      </Card.Title>

            </a>
            
        <Card.Text as ='div'>
        <div className='my-3'>
        <strong>Userscore: {movie.userScore}</strong>

        </div>

        <Card.Text as ='h3'>
             Duration {movie.duration}
        </Card.Text>

        <Card.Text as ='h3'>
        name {movie.name}
        </Card.Text>




        <Card.Text as ='h3'>
        Release Date {movie.releaseDate}
        </Card.Text>


        <Card.Text as ='h3'>
        Duration {movie.duration}
        </Card.Text>
        

      



        </Card.Text>

</Card.Body>




        </Card>
        
        
        );
}
 
export default Movies;