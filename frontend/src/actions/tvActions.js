import {
    TV_LIST_REQUEST,
    TV_LIST_SUCCESS,
    TV_LIST_FAIL,
    TV_DETAILS_LIST_REQUEST,
    TV_DETAILS_LIST_SUCCESS,
    TV_DETAILS_LIST_FAIL,
    SAVE_TV_DETAILS_REQUEST,
    SAVE_TV_DETAILS_SUCCESS,
    SAVE_TV_DETAILS_FAIL,
    SERIES_CAST_REQUEST,
    SERIES_CAST_SUCCESS ,
    SERIES_CAST_FAIL,
    CURRENT_SEASON_REQUEST,
    CURRENT_SEASON_SUCCESS,
    CURRENT_SEASON_FAIL,

    TV_SEARCH_REQUEST,
    TV_SEARCH_SUCCESS,
    TV_SEARCH_FAIL,
} from '../constants/tvConstants'

import { fetchData,backEndCall, searchData } from '../util/helper'

export const listTv=(tv)=> async(dispach)=> {
    try{
        dispach({type: TV_LIST_REQUEST})

        const response = await fetchData(`tv/${tv}`);
        dispach({
            type: TV_LIST_SUCCESS,
            payload: response.results
        })

    }catch(error){
        dispach({
            type: TV_LIST_FAIL,
            payload: error.response
        })
    }
}


export const listTvDetails = (id) => async(dispach) => {
    try{
        dispach({type: TV_DETAILS_LIST_REQUEST})
        const response = await fetchData(`tv/${id}`);
        console.log(response)
        dispach({
            type: TV_DETAILS_LIST_SUCCESS,
            payload: response
        })

    }catch(error){
        dispach({
            type: TV_DETAILS_LIST_FAIL,
            payload: error.response
        })
    }
}

export const saveTVDetails = (tv)=> async(dispach)=> {
    try{
        dispach({type: SAVE_TV_DETAILS_REQUEST})
        const response = await backEndCall(`tv`, tv);
        console.log(response)
        dispach({
            type: SAVE_TV_DETAILS_SUCCESS,
            payload: response
        })

    }catch(error){
        dispach({
            type: SAVE_TV_DETAILS_FAIL,
            payload: error.response
        })
    }
}

// https://api.themoviedb.org/3/tv/130542-bhagya-lakshmi?api_key=134394aa4ce3b3f13628fa60f2f17bfe
export const listSeriesCastTV= (tvId)=> async(dispach)=> {
    try{
        dispach({type: SERIES_CAST_REQUEST})
        const response = await fetchData(`tv/${tvId}/credits`);

        console.log(response)

        dispach({
            type: SERIES_CAST_SUCCESS,
            payload: response
        })

    }catch(error){
        dispach({
            type: SERIES_CAST_FAIL,
            payload: error.response
        })
    }
}


// https://api.themoviedb.org/3/tv/60625/season/1?api_key=134394aa4ce3b3f13628fa60f2f17bfe
export const listCurrentSeasonTV= (tvId)=> async(dispach)=> {
    try{
        dispach({type: CURRENT_SEASON_REQUEST})
        const response = await fetchData(`tv/${tvId}/season/1`);
        console.log(response)

        dispach({
            type: CURRENT_SEASON_SUCCESS,
            payload: response
        })

    }catch(error){
        dispach({
            type: CURRENT_SEASON_FAIL,
            payload: error.response
        })
    }
}


export const listTVSearch= (movie, searchTerm, pageNumber)=> async(dispach)=> {
    try{
        dispach({type: TV_SEARCH_REQUEST})
        const response = await searchData(movie, searchTerm, pageNumber);
        console.log(response.results)
        dispach({
            type: TV_SEARCH_SUCCESS,
            payload: response.results
        })

    }catch(error){
        dispach({
            type: TV_SEARCH_FAIL,
            payload: error.response
        })
    }
}

