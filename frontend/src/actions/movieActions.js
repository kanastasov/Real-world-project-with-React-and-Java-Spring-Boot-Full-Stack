import {
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,
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