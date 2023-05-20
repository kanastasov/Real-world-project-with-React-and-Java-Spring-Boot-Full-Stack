import {
    PERSON_LIST_REQUEST ,
    PERSON_LIST_SUCCESS,
    PERSON_LIST_FAIL,
    PERSON_DETAILS_LIST_REQUEST ,
    PERSON_DETAILS_LIST_SUCCESS,
    PERSON_DETAILS_LIST_FAIL, 
    SAVE_PERSON_DETAILS_REQUEST,
    SAVE_PERSON_DETAILS_SUCCESS ,
    SAVE_PERSON_DETAILS_FAIL,
    TOP_BILLED_ACTORS_REQUEST,
    TOP_BILLED_ACTORS_SUCCESS,
    TOP_BILLED_ACTORS_FAIL,
} from '../constants/personConstants'

export const personListReducer = (state = {people:[]}, action) => {
    switch(action.type){
        case PERSON_LIST_REQUEST:
            return {loading: true, people:[]}
        case PERSON_LIST_SUCCESS:
            return {loading: false, people: action.payload}
        case PERSON_LIST_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}


export const personDetailsReducer = (state = {person:{}}, action) => {
    switch(action.type){
        case PERSON_DETAILS_LIST_REQUEST:
            return {loading: true, ...state}
        case PERSON_DETAILS_LIST_SUCCESS:
            return {loading: false, person: action.payload}
        case PERSON_DETAILS_LIST_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}

export const savePersonDetailsReducer = (state = {person:{}}, action) => {
    switch(action.type){
        case SAVE_PERSON_DETAILS_REQUEST:
            return {loading: true, ...state}
        case SAVE_PERSON_DETAILS_SUCCESS:
            return {loading: false, person: action.payload}
        case SAVE_PERSON_DETAILS_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}


export const actorsTopBilledReducer = (state = {topBilledActors:[]}, action) => {
    switch(action.type){
        case TOP_BILLED_ACTORS_REQUEST:
            return {loading: true, ...state}
        case TOP_BILLED_ACTORS_SUCCESS:
            return {loading: false, topBilledActors: action.payload}
        case TOP_BILLED_ACTORS_FAIL:
            return {
                loading:false, error: action.payload
            }
            default:
                return state
    }
}