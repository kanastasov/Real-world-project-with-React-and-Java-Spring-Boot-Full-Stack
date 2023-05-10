import {
    TV_LIST_REQUEST,
    TV_LIST_SUCCESS,
    TV_LIST_FAIL,
    TV_DETAILS_LIST_REQUEST,
    TV_DETAILS_LIST_SUCCESS,
    TV_DETAILS_LIST_FAIL,
} from '../constants/tvConstants'


export const tvListReducer = (state = {tvs:[]}, action) => {
    switch(action.type){
        case TV_LIST_REQUEST:
            return {loading: true, tvs:[]}
        case TV_LIST_SUCCESS:
            return {loading: false, tvs: action.payload}
        case TV_LIST_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}



export const tvDetailsReducer = (state = {tv:{}}, action) => {
    switch(action.type){
        case TV_DETAILS_LIST_REQUEST:
            return {loading: true, ...state}
        case TV_DETAILS_LIST_SUCCESS:
            return {loading: false, tv: action.payload}
        case TV_DETAILS_LIST_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}