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
    MOVIE_CREDITS_REQUEST,
    MOVIE_CREDITS_SUCCESS ,
    MOVIE_CREDITS_FAIL,
    MOVIE_SEARCH_REQUEST,
    MOVIE_SEARCH_SUCCESS,
    MOVIE_SEARCH_FAIL,

} from '../constants/movieConstants'

import { fetchData,backEndCall, searchData } from '../util/helper'

export const listMovies=(movie)=> async(dispach)=> {
    try{
        dispach({type: MOVIE_LIST_REQUEST})

        const response = await fetchData(`movie/${movie}`);
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

// https://api.themoviedb.org/3/person/58021/movie_credits?api_key=134394aa4ce3b3f13628fa60f2f17bfe
export const listMovieCredits = (id)=> async(dispach)=> {
    try{
        dispach({type: MOVIE_CREDITS_REQUEST})
        const response = await fetchData(`person/${id}/movie_credits`);
        console.log(response.cast)
        dispach({
            type: MOVIE_CREDITS_SUCCESS,
            payload: response.cast
        })

    }catch(error){
        dispach({
            type: MOVIE_CREDITS_FAIL,
            payload: error.response
        })
    }
}


export const listMovieSearch= (movie, searchTerm, pageNumber)=> async(dispach)=> {
    try{
        dispach({type: MOVIE_SEARCH_REQUEST})
        const response = await searchData(movie, searchTerm, pageNumber);
        console.log(response.results)
        dispach({
            type: MOVIE_SEARCH_SUCCESS,
            payload: response.results
        })

    }catch(error){
        dispach({
            type: MOVIE_SEARCH_FAIL,
            payload: error.response
        })
    }
}



