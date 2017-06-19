import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  movies: require('./movies').default,
  watchedMovies: require('./watchedMovies').default,
  // watchLists: require('./wishMovies').default,
  watchLists: require('./watchLists').default,
})

export default rootReducer
