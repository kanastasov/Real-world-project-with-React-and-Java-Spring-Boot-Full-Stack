import {
    VIDEO_REQUEST,
    VIDEO_SUCCESS,
    VIDEO_FAIL,
} from '../constants/videoConstants'

import { fetchData } from '../util/helper'


export const listVideos = (movie_id, type)=> async(dispach)=> {
    try{
        dispach({type: VIDEO_REQUEST})
        const response = await fetchData(`${type}/${movie_id}/videos`);
        console.log(response.results)
        dispach({
            type: VIDEO_SUCCESS,
            payload: response.results
        })
    }catch(error){
        dispach({
            type: VIDEO_FAIL,
            payload: error.response
        })
    }
}

