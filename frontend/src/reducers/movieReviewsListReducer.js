import {
    REVIEW_REQUEST,
    REVIEW_SUCCESS ,
    REVIEW_FAIL,
} from '../constants/reviewsConstants'


export const movieReviewsListReducer = (state = {movieReviews:[]}, action) => {
    switch(action.type){
        case REVIEW_REQUEST:
            return {loading: true, movieReviews:[]}
        case REVIEW_SUCCESS:
            return {loading: false, movieReviews: action.payload}
        case REVIEW_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}

