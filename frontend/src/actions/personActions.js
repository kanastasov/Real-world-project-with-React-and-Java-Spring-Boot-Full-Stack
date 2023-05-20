import {
    PERSON_LIST_REQUEST ,
    PERSON_LIST_SUCCESS,
    PERSON_LIST_FAIL,
    PERSON_DETAILS_LIST_REQUEST ,
    PERSON_DETAILS_LIST_SUCCESS,
    PERSON_DETAILS_LIST_FAIL, 
    SAVE_PERSON_DETAILS_REQUEST,
    SAVE_PERSON_DETAILS_SUCCESS ,
    SAVE_PERSON_DETAILS_FAIL,
    TOP_BILLED_ACTORS_REQUEST,
    TOP_BILLED_ACTORS_SUCCESS,
    TOP_BILLED_ACTORS_FAIL,

} from '../constants/personConstants'

import { fetchData,backEndCall } from '../util/helper'

export const listPeople=()=> async(dispach)=> {
    try{
        dispach({type: PERSON_LIST_REQUEST})

        const response = await fetchData('person/popular');
        dispach({
            type: PERSON_LIST_SUCCESS,
            payload: response.results
        })

    }catch(error){
        dispach({
            type: PERSON_LIST_FAIL,
            payload: error.response
        })
    }
}

export const listPersonDetails = (id)=> async(dispach)=> {
    try{
        dispach({type: PERSON_DETAILS_LIST_REQUEST})
        const response = await fetchData(`person/${id}`);
        console.log(response)
        dispach({
            type: PERSON_DETAILS_LIST_SUCCESS,
            payload: response
        })

    }catch(error){
        dispach({
            type: PERSON_DETAILS_LIST_FAIL,
            payload: error.response
        })
    }
}

export const savePersonDetails = (person)=> async(dispach)=> {
    try{
        dispach({type: SAVE_PERSON_DETAILS_REQUEST})
        const response = await backEndCall(`people`, person);
        console.log(response)
        dispach({
            type: SAVE_PERSON_DETAILS_SUCCESS,
            payload: response
        })

    }catch(error){
        dispach({
            type: SAVE_PERSON_DETAILS_FAIL,
            payload: error.response
        })
    }
}

export const listTopBilledActors = (movie_id)=> async(dispach)=> {
    try{
        dispach({type: TOP_BILLED_ACTORS_REQUEST})
        const response = await fetchData(`movie/${movie_id}/credits`);
        console.log(response.cast)
        dispach({
            type: TOP_BILLED_ACTORS_SUCCESS,
            payload: response.cast
        })

    }catch(error){
        dispach({
            type: TOP_BILLED_ACTORS_FAIL,
            payload: error.response
        })
    }
}


