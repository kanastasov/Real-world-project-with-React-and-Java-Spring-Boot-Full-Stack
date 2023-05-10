import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { movieListReducer,movieDetailsReducer } from './reducers/movieListReducer'
import {tvListReducer, tvDetailsReducer} from './reducers/tvListReducer'
const reducer = combineReducers({
    movieList: movieListReducer,
    movieDetails: movieDetailsReducer,
    tvList: tvListReducer,
    tvDetails: tvDetailsReducer,
})


const initialState={}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(... middleware))
)

export default store