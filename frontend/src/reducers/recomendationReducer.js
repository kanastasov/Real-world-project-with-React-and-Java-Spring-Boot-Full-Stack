import {
    RECOMENDATION_REQUEST,
    RECOMENDATION_SUCCESS ,
    RECOMENDATION_FAIL ,
    
} from '../constants/recomendationConstants'


export const recomendationListReducer = (state = {recomendationData:[]}, action) => {
    switch(action.type){
        case RECOMENDATION_REQUEST:
            return {loading: true, recomendationData:[]}
        case RECOMENDATION_SUCCESS:
            return {loading: false, recomendationData: action.payload}
        case RECOMENDATION_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}

