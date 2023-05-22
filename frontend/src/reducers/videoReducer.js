import {
    VIDEO_REQUEST,
    VIDEO_SUCCESS,
    VIDEO_FAIL,
} from '../constants/videoConstants'


export const videoReducer = (state = {movieVideo:[]}, action) => {
    switch(action.type){
        case VIDEO_REQUEST:
            return {loading: true, movieVideo:[]}
        case VIDEO_SUCCESS:
            return {loading: false, movieVideo: action.payload}
        case VIDEO_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}

