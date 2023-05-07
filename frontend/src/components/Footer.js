import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return ( 
        <footer>
            <Container className='light-group-item'>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; The Movie DB
                    </Col>

                </Row>

            </Container>

        </footer>

     );
}
 
export default Footer;