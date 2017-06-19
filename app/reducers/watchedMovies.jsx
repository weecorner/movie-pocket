import axios from 'axios'
import store from '../store'
import {browserHistory} from 'react-router'

//Constants
const RECEIVE_WATCHEDMOVIES = 'RECEIVE_WATCHEDMOVIES'
const ADD_MOVIE = 'ADD_MOVIE'
const REMOVE_MOVIE = 'REMOVE_MOVIE'

//Reducer
const initialWatchedMoviesState = {
  list: [],
  //selectedMovie: {}
}

const reducer = (state = initialWatchedMoviesState, action) => {
  const newState = Object.assign({}, state)

  console.log("~~~~watchedMovies:" + newState);
  switch (action.type) {
    case RECEIVE_WATCHEDMOVIES:
      newState.list = action.watchedMovies
      break

    // case RECEIVE_MOVIE:
    //   newState.selectedMovie = action.movie

    default: 
      return state
  }
  return newState
   
}

//Action Creators
export const receiveWatchedMovies = watchedMovies => ({
  type: RECEIVE_WATCHEDMOVIES,
  watchedMovies
})

// export const receiveMovie = movie => ({
//   type: RECEIVE_MOVIE,
//   movie
// })

export const addWatchedMovie = movie => {
  return (dispatch, getState) => {
    const user = getState().auth
    return axios.post(`/api/watched-movies/${user.id}`, {movieId: movie.id})
      .then(res => res.data)
      .then(movie => {
        const newWatchedMovies = getState().watchedMovies.list.concat([movie])
        dispatch(receiveWatchedMovies(newWatchedMovies))
      })
  }
}

export const deleteWatchedMovie = movie => {
  return (dispatch, getState) => {
    //const selectedMovie = getState().watchedMovies.selectedMovie
    return axios.delete(`/api/watched-movies/${movie.id}`)
      .then(()=> {
        const watchedMovies = getState().watchedMovies.list
        const newWatchedMovies = watchedMovies.filter(mv => {return mv.id !== movie.id})
        dispatch(receiveWatchedMovies(newWatchedMovies))
        hashHistory.push('/watchedMovies')
      })
  }
}

export default reducer