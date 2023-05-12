import {
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,
    MOVIE_DETAILS_LIST_REQUEST,
    MOVIE_DETAILS_LIST_SUCCESS,
    MOVIE_DETAILS_LIST_FAIL,

    SAVE_MOVIE_DETAILS_REQUEST, 
    SAVE_MOVIE_DETAILS_SUCCESS,
    SAVE_MOVIE_DETAILS_FAIL,
} from '../constants/movieConstants'

import { fetchData,backEndCall } from '../util/helper'

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

export const saveMovieDetails = (movie)=> async(dispach)=> {
    try{
        dispach({type: SAVE_MOVIE_DETAILS_REQUEST})
        const response = await backEndCall(`movies`, movie);
        console.log(response)
        dispach({
            type: SAVE_MOVIE_DETAILS_SUCCESS,
            payload: response
        })

    }catch(error){
        dispach({
            type: SAVE_MOVIE_DETAILS_FAIL,
            payload: error.response
        })
    }
}