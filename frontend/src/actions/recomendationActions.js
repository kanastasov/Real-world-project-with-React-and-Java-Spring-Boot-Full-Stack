import {
    RECOMENDATION_REQUEST,
    RECOMENDATION_SUCCESS ,
    RECOMENDATION_FAIL ,
    
} from '../constants/recomendationConstants'

import { fetchData } from '../util/helper'


export const listRecomendation = (movie_id)=> async(dispach)=> {
    try{
        dispach({type: RECOMENDATION_REQUEST})
        const response = await fetchData(`movie/${movie_id}/recommendations`);
        console.log(response.results)
        dispach({
            type: RECOMENDATION_SUCCESS,
            payload: response.results
        })
    }catch(error){
        dispach({
            type: RECOMENDATION_FAIL,
            payload: error.response
        })
    }
}


