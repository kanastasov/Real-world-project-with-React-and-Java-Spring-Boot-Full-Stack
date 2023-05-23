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

export const movieListReducer = (state = {movies:[]}, action) => {
    switch(action.type){
        case MOVIE_LIST_REQUEST:
            return {loading: true, movies:[]}
        case MOVIE_LIST_SUCCESS:
            return {loading: false, movies: action.payload}
        case MOVIE_LIST_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}


export const movieDetailsReducer = (state = {movie:{}}, action) => {
    switch(action.type){
        case MOVIE_DETAILS_LIST_REQUEST:
            return {loading: true, ...state}
        case MOVIE_DETAILS_LIST_SUCCESS:
            return {loading: false, movie: action.payload}
        case MOVIE_DETAILS_LIST_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}

export const saveMovieDetailsReducer = (state = {movie:{}}, action) => {
    switch(action.type){
        case SAVE_MOVIE_DETAILS_REQUEST:
            return {loading: true, ...state}
        case SAVE_MOVIE_DETAILS_SUCCESS:
            return {loading: false, movie: action.payload}
        case SAVE_MOVIE_DETAILS_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}

export const movieCreditsReducer = (state = {movieCreditsObj:{}}, action) => {
    switch(action.type){
        case MOVIE_CREDITS_REQUEST:
            return {loading: true, ...state}
        case MOVIE_CREDITS_SUCCESS:
            return {loading: false, movieCreditsObj: action.payload}
        case MOVIE_CREDITS_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}


export const movieSearchListReducer = (state = {movies:[]}, action) => {
    switch(action.type){
        case MOVIE_SEARCH_REQUEST:
            return {loading: true, ...state}
        case MOVIE_SEARCH_SUCCESS:
            return {loading: false, movies: action.payload}
        case MOVIE_SEARCH_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}