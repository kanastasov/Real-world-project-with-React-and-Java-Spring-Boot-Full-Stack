import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, CardImg} from 'react-bootstrap'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listTvDetails, saveTVDetails, listSeriesCastTV } from '../actions/tvActions';

import Person from '../components/Person';
const TVScreen = ({match}) => {
    const size = 175;
    const dispatch = useDispatch()
    const tvDetails = useSelector(state => state.tvDetails)
    const {tv} = tvDetails

    const seriesCastStore = useSelector(state => state.seriesCastStore)
    const {seriesCast} = seriesCastStore

    console.log(seriesCast)




    const {id} = useParams();
    console.log(id)
        useEffect(() => {
            dispatch(listTvDetails(id))
            dispatch(listSeriesCastTV(id))
    
        }, [dispatch])
    


        const tempTV = {
            name: tv.name,
            posterPath: tv?.poster_path,
            overview: tv.overview,
            productionCompaniesTV: tv.production_companies?.map(company => company.name),
            voteAverage : tv.vote_average*10,
            voteCount: tv.vote_count,
            genres: tv.genres?.map(genre => genre.name),
            theMovieDbId: tv.id,
            originalName: tv.original_name,
            firstAirDate: tv.last_air_date,
    
        }
    
    
        function saveTV() {
            console.log(tempTV)
            dispatch(saveTVDetails(tempTV))
        }


    return (
    <div>
        <Link className='btn btn-dark my-3' to = '/api/tv'>Go Back</Link>

          <div style={{
            backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 10.5, 1), calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 10.5, 0.84) 50%, rgba(31.5, 31.5, 10.5, 0.84) 100%), url(https://image.tmdb.org/t/p/w500${tv?.poster_path})`
      }}>


    
        <Row>
            <Col md={3}>

            <CardImg style={{height: '450px', width: '300px'}} src = {`https://image.tmdb.org/t/p/w300_and_h450_bestv2${tv?.backdrop_path}`} variant = 'top'/>


            </Col>


            <Col md={3}>
            <nav>
            <div>
                <h3>{tv?.title} (2023)</h3>
            </div>
            <div>
                <strong>D {tv?.release_date}  (BG). {tv?.genres?.map(genre => genre.name + ', ' || '')} {tv?.runtime} min </strong>
            </div>


              <ul className='style-ul'>

                
             <li className='style-li'>
             <div  style = {{height : '50px', width: '50px'}} >
                <CircularProgressbar value={tv?.vote_average*10} text={`${tv?.vote_average*10}%`} />
            </div>
             </li>
            <li className='style-li'> <div>UserScore</div></li>
            <li className='style-li'>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></li>
            <li className='style-li'> 
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg></li>
            <li className='style-li'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg></li>
            <li className='style-li'>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg></li>
            <li>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
</svg><Link>Play  </Link></li>
        
            </ul>  
            <div>
             
             <h4 style= {{fontStyle:'italic'}}>{tv?.tagline} </h4>
         </div>
            <h3>
               Overview 
            </h3>
            <strong>{tv?.overview}</strong>
         
            </nav>

            </Col>
        </Row>

        </div>


        <div>
           <h3>Series Cast</h3>
           <Row>
                {seriesCast.cast.map((person,index) =>
                 (index < 8) ?
                 <Col
                 style={{width: '10%'}}
                 key = {person.id} sm={12} md={6}lg={4} xl={3}
                 >
                  <Person person={person} size={size} />
                 </Col>
                 : null
                )}

           </Row>
        </div>
        <button className='btn btn-dark my-3'  onClick={saveTV}>Edit Page</button>

    </div>
    
    );
}
 
export default TVScreen;