import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { movieListReducer,movieDetailsReducer, saveMovieDetailsReducer, movieCreditsReducer,movieSearchListReducer } from './reducers/movieListReducer'
import {tvListReducer, tvDetailsReducer,saveTVDetailsReducer, seriesCastReducer, currentSeasonReducer} from './reducers/tvListReducer'
import {personDetailsReducer, savePersonDetailsReducer, personListReducer,actorsTopBilledReducer} from './reducers/personListReducer'
import {movieReviewsListReducer} from './reducers/movieReviewsListReducer'
import {recomendationListReducer} from './reducers/recomendationReducer'
import {videoReducer} from './reducers/videoReducer'
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
    actorsTopBilled: actorsTopBilledReducer,
    movieReviewsList: movieReviewsListReducer,
    recomendation: recomendationListReducer,
    video: videoReducer,
    seriesCastStore: seriesCastReducer,
    currentSeason: currentSeasonReducer,
    movieCredits: movieCreditsReducer,
    movieSearchList: movieSearchListReducer,

})


const initialState={}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store