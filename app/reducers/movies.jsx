import axios from 'axios'
import {browserHistory} from 'react-router'

//Actions:
const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
const RECEIVE_MOVIE = 'RECEIVE_MOVIE'

//Reducer:
const initialMoviesState = {
  selected: {},
  list: []
}
const reducer = (state=initialMoviesState, action) =>{
  const newState= Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_MOVIES:
      newState.list = action.movies
      break

    case RECEIVE_MOVIE:
      newState.selected = action.movie
      break

    default: 
      return state
  }

  return newState
}

//Action-creators
export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
})

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie 
})

export const getMovieById = movieId => {
  return dispatch => {
    return axios.get(`/api/movies/${movieId}`)
      .then(res => {
        dispatch(receiveMovie(res.data))
      })
  }
}

export const getMoviesByGenre = genreName => {
  return dispatch => {
    axios.get(`/api/movies/genres/${genreName}`)
    .then(res => {
      dispatch(receiveMovies(res.data))
    })
  }
}

export default reducer
