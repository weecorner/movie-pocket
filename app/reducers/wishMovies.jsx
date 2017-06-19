import axios from 'axios'
import store from '../store'

//Constants
const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS'
const ADD_MOVIE = 'ADD_MOVIE'
const REMOVE_MOVIE = 'REMOVE_MOVIE'

//Reducer
const initialWatchListsState = {
  list: [],
  //selectedMovie: {}
}

const reducer = (state = initialWatchListsState, action) => {
  console.log("~~~~watchLists");
  const newState = Object.assign({}, state)

  console.log("~~~~" + newState);
  switch (action.type) {
    case RECEIVE_WATCHLISTS:
      newState.list = action.watchLists 
      break

    // case RECEIVE_MOVIE:
    //   newState.selectedMovie = action.movie

    default: 
      return state
  }
  return newState
   
}

//Action Creators
export const receiveWatchLists = watchLists => ({
  type: RECEIVE_WATCHLISTS,
  watchLists
})

// export const receiveMovie = movie => ({
//   type: RECEIVE_MOVIE,
//   movie
// })

export const addNewMovie = movie => {
  return (dispatch, getState) => {
    const user = getState().auth
    return axios.post(`/api/watch-list/${user.id}`, {movieId: movie.id})
      .then(res => res.data)
      .then(movie => {
        const newWatchLists = getState().watchLists.list.concat([movie])
        dispatch(receiveWatchLists(newWatchLists))
      })
  }
}

export const deleteMovie = movie => {
  return (dispatch, getState) => {
    //const selectedMovie = getState().watchLists.selectedMovie
    return axios.delete(`/api/watch-list/${movie.id}`)
      .then(()=> {
        const watchLists = getState().watchLists.list
        const newWatchLists = watchLists.filter(mv => {return mv.id !== movie.id})
        dispatch(receiveWatchLists(newWatchLists))
        hashHistory.push('/watchList')
      })
  }
}

export default reducer
