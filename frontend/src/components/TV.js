import React from 'react';
import {Card, CardImg} from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';

const TV = ({tv}) => {
    return (
        
        <Card className='my-3 p-3 rounded'>
            <a href={`/api/tv/${tv.id}`}>
        <CardImg src = {`https://image.tmdb.org/t/p/w500${tv.poster_path}`} variant = 'top'/>
            </a>


    <Card.Body>
        <a href={`/api/tv/${tv.id}`}>
      <Card.Title as='div'>
        <strong>{tv.title}</strong>

      </Card.Title>

            </a>
            
        <Card.Text as ='div'>
        <div className='my-3' style = {{height : '50px', width: '50px'}}>
         <CircularProgressbar   value={tv?.vote_average * 10} text={`${tv?.vote_average * 10}%`} />
        </div>


        <Card.Text as ='h4' style={{color: 'black'}}>
               {tv.original_name}
        </Card.Text>




        <Card.Text as ='h5' style={{color: 'grey'}}>
             {tv.first_air_date}
        </Card.Text>


       

      



        </Card.Text>

</Card.Body>




        </Card>
        
        
        );
}
 
export default TV;