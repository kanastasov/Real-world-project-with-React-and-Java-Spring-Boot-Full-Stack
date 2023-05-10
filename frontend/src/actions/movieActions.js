import {
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,

    MOVIE_DETAILS_LIST_REQUEST,
    MOVIE_DETAILS_LIST_SUCCESS,
    MOVIE_DETAILS_LIST_FAIL,
} from '../constants/movieConstants'

import { fetchData } from '../util/helper'

export const listMovies=()=> async(dispach)=> {
    try{
        dispach({type: MOVIE_LIST_REQUEST})

        const response = await fetchData('movie/popular');
        dispach({
            type: MOVIE_LIST_SUCCESS,
            payload: response.results
        })

    }catch(error){
        dispach({
            type: MOVIE_LIST_FAIL,
            payload: error.response
        })
    }
}

export const listMovieDetails = (id)=> async(dispach)=> {
    try{
        dispach({type: MOVIE_DETAILS_LIST_REQUEST})
        const response = await fetchData(`movie/${id}`);
        console.log(response)
        dispach({
            type: MOVIE_DETAILS_LIST_SUCCESS,
            payload: response
        })

    }catch(error){
        dispach({
            type: MOVIE_DETAILS_LIST_FAIL,
            payload: error.response
        })
    }
}