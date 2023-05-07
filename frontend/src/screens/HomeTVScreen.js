import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import { fetchData } from '../util/helper';
import TV from '../components/TV';

const HomeTVScreen = () => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        const axiosMovies = async() => {
            const response = await fetchData('tv/popular');
            console.log(response);
            setMovies(response.results);
        }
        axiosMovies();

    }, [])



    return (
       <>
        Latest Movies

        <Row>
            {movies.map(movie => (
                <Col key={movie.id} sm={12} md={4} lg={4}xl={3}>
                    <TV movie={movie} />
                </Col>
            ))}

        </Row>
       
       </>
        
        
        );
}
 
export default HomeTVScreen;