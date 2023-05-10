import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import { fetchData } from '../util/helper';
import TV from '../components/TV';
import { useDispatch, useSelector } from 'react-redux';
import { listTv } from '../actions/tvActions';


const HomeTVScreen = () => {

    // const [movies, setMovies] = useState([])
    const dispatch = useDispatch()
    const tvList = useSelector(state => state.tvList)
    const {tvs} = tvList

    useEffect(() => {
        dispatch(listTv())

    }, [dispatch])



    return (
       <>
        Latest Movies

        <Row>
            {tvs.map(tv => (
                <Col key={tv.id} sm={12} md={4} lg={4}xl={3}>
                    <TV tv={tv} />
                </Col>
            ))}

        </Row>
       
       </>
        
        
        );
}
 
export default HomeTVScreen;