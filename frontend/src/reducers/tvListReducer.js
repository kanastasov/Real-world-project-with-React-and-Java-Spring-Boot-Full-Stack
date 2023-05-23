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

export const saveTVDetailsReducer = (state = {tv:{}}, action) => {
    switch(action.type){
        case SAVE_TV_DETAILS_REQUEST:
            return {loading: true, ...state}
        case SAVE_TV_DETAILS_SUCCESS:
            return {loading: false, tv: action.payload}
        case SAVE_TV_DETAILS_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}

export const seriesCastReducer = (state = {seriesCast:{}}, action) => {
    switch(action.type){
        case SERIES_CAST_REQUEST:
            return {loading: true, ...state}
        case SERIES_CAST_SUCCESS:
            return {loading: false, seriesCast: action.payload}
        case SERIES_CAST_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}


export const currentSeasonReducer = (state = {currentSesonEpisodes:{}}, action) => {
    switch(action.type){
        case CURRENT_SEASON_REQUEST:
            return {loading: true, ...state}
        case CURRENT_SEASON_SUCCESS:
            return {loading: false, currentSesonEpisodes: action.payload}
        case CURRENT_SEASON_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}


export const tvSearchListReducer = (state = {tvs:{}}, action) => {
    switch(action.type){
        case TV_SEARCH_REQUEST:
            return {loading: true, ...state}
        case TV_SEARCH_SUCCESS:
            return {loading: false, currentSesonEpisodes: action.payload}
        case TV_SEARCH_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}