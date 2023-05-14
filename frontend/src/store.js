import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { movieListReducer,movieDetailsReducer, saveMovieDetailsReducer } from './reducers/movieListReducer'
import {tvListReducer, tvDetailsReducer,saveTVDetailsReducer} from './reducers/tvListReducer'
import {personDetailsReducer, savePersonDetailsReducer, personListReducer} from './reducers/personListReducer'
const reducer = combineReducers({
    movieList: movieListReducer,
    movieDetails: movieDetailsReducer,
    tvList: tvListReducer,
    tvDetails: tvDetailsReducer,
    saveMoveDetails: saveMovieDetailsReducer,
    saveTVDetails: saveTVDetailsReducer,
    personDetails: personDetailsReducer,
    savePersonDetails: savePersonDetailsReducer,
    personList: personListReducer,

})


const initialState={}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(... middleware))
)

export default store