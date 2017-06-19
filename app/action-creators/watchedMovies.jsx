import axios from 'axios'
import store from '../store'
import {browserHistory} from 'react-router'

//Constants
const RECEIVE_WATCHEDMOVIES = 'RECEIVE_WATCHEDMOVIES'
const ADD_MOVIE = 'ADD_MOVIE'
const REMOVE_MOVIE = 'REMOVE_MOVIE'

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
    const user = getState().auth
    return axios.delete(`/api/watched-movies/${user.id}/${movie.movie_id}`)
      .then(()=> {
        const watchedMovies = getState().watchedMovies.list
        const newWatchedMovies = watchedMovies.filter(mv => {return (mv.movie_id !== movie.movie_id) || (mv.user_id !== movie.user_id)})
        dispatch(receiveWatchedMovies(newWatchedMovies))
        // browserHistory.push('/watched-movies')
      })
  }
}