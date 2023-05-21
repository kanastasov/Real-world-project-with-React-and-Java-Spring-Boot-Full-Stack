import React from 'react';
import {Card, CardImg, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ShowMoreText from "react-show-more-text";

const Recomendation = ({recomendation}) => {

    console.log(recomendation)
    function executeOnClick() {
        console.log('executeOnClick')
    }


    return (
        
        <Card className='my-3 p-3 rounded'>
               <a href={`/movie/${recomendation.id}`}>
        <CardImg src = {`https://image.tmdb.org/t/p/w500${recomendation.poster_path}`} variant = 'top'/>
            </a>

    <Card.Body>
       
   
               
     

        <Card.Text style={{color: 'black'}} as ='h4'>

        {recomendation?.title}
        </Card.Text>
        <Card.Text style={{color: 'grey'}} as ='h5'>

           
        {recomendation.vote_average * 10} %
        </Card.Text>
      

    </Card.Body>
        </Card>
        
        
        );
}
 
export default Recomendation;