import {
    REVIEW_REQUEST,
    REVIEW_SUCCESS ,
    REVIEW_FAIL,
} from '../constants/reviewsConstants'

import { fetchData } from '../util/helper'


export const listReviews = (movie_id, type)=> async(dispach)=> {
    try{
        dispach({type: REVIEW_REQUEST})
        const response = await fetchData(`${type}/${movie_id}/reviews`);
        console.log(response.results)
        dispach({
            type: REVIEW_SUCCESS,
            payload: response.results
        })
    }catch(error){
        dispach({
            type: REVIEW_FAIL,
            payload: error.response
        })
    }
}


