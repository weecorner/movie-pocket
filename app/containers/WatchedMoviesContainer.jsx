import React, {Component} from 'react'
import WatchedMovies from '../components/WatchedMovies'
import {connect} from 'react-redux'
import {addNewMovie} from '../action-creators/watchLists'
import {deleteMovie} from '../action-creators/watchLists'
import {addWatchedMovie} from '../action-creators/watchedMovies'
import {deleteWatchedMovie} from '../action-creators/watchedMovies'


const mapStateToProps = (state) =>{
  return {
    user: state.auth,
    watchedMovies: state.watchedMovies.list.filter(movie => movie.user_id === state.auth.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteOne(movie) {
      dispatch(deleteWatchedMovie(movie))
    }
  }
}

const WatchedMoviesContainer = connect(mapStateToProps, mapDispatchToProps)(WatchedMovies)

export default WatchedMoviesContainer