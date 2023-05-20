import React from 'react';
import {Card, CardImg} from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';

const Person = ({person, size}) => {

    console.log(person, size)
    return (
        
        <Card className='my-3 p-3 rounded'>
            <a href={`/api/people/${person?.id}`}>
        <CardImg 
        style={{width: {size}}}
        src = {`https://image.tmdb.org/t/p/w500${person?.profile_path}`} variant = 'top'/>
            </a>

    <Card.Body>
        <a href={`/api/people/${person?.id}`}>
      <Card.Title as='div'>
        <strong>{person?.title}</strong>
      </Card.Title>
            </a>      
        <Card.Text as ='div'>
        <Card.Text style={{color: 'black'}} as ='h4'>
         {person?.name}
        </Card.Text>
        <Card.Text style={{color: 'grey'}} as ='h5'>
         {person?.character}
        </Card.Text>
        </Card.Text>

    </Card.Body>
        </Card>
        
        
        );
}
 
export default Person;