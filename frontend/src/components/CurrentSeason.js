import React from 'react';
import {Card, CardImg, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const CurrentSeason = ({currentSesonEpisodes}) => {

    return (
        
           
        <Card className='rounded current-season'>
            <a href={`/movie/${currentSesonEpisodes.id}`}>
                <CardImg style={{height: '195px', width: '130px'}} src = {`https://image.tmdb.org/t/p/w500${currentSesonEpisodes.poster_path}`} variant = 'top'/>
            </a>        
        <Card.Body>
            <Col>
                <Link to={`/currentSesonEpisodes/${currentSesonEpisodes?.id}`}>
                    <Card.Title style={{color: 'black'}} as ='div'>

                    </Card.Title>
                
                </Link>
            
            </Col>
    
            <Card.Text style={{color: 'black'}} as ='h2'>
            <a href="#">{currentSesonEpisodes?.name}</a> 
            </Card.Text>
        

            <Card.Text style={{color: 'black'}} as ='h4'>
            <p>{currentSesonEpisodes?.air_date?.substring(0,4)} | {currentSesonEpisodes?.episodes?.length -1 }</p>
            </Card.Text>
        

            <Card.Text style={{color: 'black'}} as ='div' className="season-overview">
            <p>{currentSesonEpisodes?.overview}</p> 
            </Card.Text>

        

        </Card.Body>
        </Card>
        
        );
}
 
export default CurrentSeason;