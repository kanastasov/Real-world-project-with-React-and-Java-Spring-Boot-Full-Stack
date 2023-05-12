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
    
} from '../constants/tvConstants'

import { fetchData,backEndCall } from '../util/helper'

export const listTv=()=> async(dispach)=> {
    try{
        dispach({type: TV_LIST_REQUEST})

        const response = await fetchData('tv/popular');
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