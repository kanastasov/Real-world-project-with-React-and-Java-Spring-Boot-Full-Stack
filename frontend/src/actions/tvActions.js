import {
    TV_LIST_REQUEST,
    TV_LIST_SUCCESS,
    TV_LIST_FAIL,
    TV_DETAILS_LIST_REQUEST,
    TV_DETAILS_LIST_SUCCESS,
    TV_DETAILS_LIST_FAIL,

    
} from '../constants/tvConstants'

import { fetchData } from '../util/helper'

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