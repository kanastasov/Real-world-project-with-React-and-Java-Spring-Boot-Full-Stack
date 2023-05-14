import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Person from '../components/Person';
import {listPeople} from '../actions/personActions'
const PersonScreen = () => {
    const dispatch = useDispatch()
    const personList = useSelector(state => state.personList)
    const {people} = personList
    console.log(people)
    

    useEffect(() => {
        dispatch(listPeople())


    }, [dispatch])



    return (
       <>
        <h3>Popular People</h3>

        <Row>
            {people.map(person => (
                <Col key={person.id} sm={12} md={4} lg={4}xl={3}>
                    <Person person={person} />
                </Col>
            ))}

        </Row>
       
       </>
        
        
        );
}
 
export default PersonScreen;