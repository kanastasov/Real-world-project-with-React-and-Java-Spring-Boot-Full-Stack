import React from 'react';
import {Row, Col} from 'react-bootstrap'
import movies from '../movies'
import Movies from '../components/Movies';

const HomeScreen = () => {
    return (
       <>
        Latest Movies

        <Row>
            {movies.map(movie => (
                <Col sm={12} md={4} lg={4}xl={3}>
                    <Movies movie={movie} />
                </Col>
            ))}

        </Row>
       
       </>
        
        
        );
}
 
export default HomeScreen;