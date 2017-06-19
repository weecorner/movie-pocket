import React, {Component} from 'react'
import User from '../components/User'
import {connect} from 'react-redux'
import {addNewMovie} from '../action-creators/watchLists'
import {deleteMovie} from '../action-creators/watchLists'
import {addWatchedMovie} from '../action-creators/watchedMovies'
import {deleteWatchedMovie} from '../action-creators/watchedMovies'


const mapStateToProps = (state) =>{
  return {
    user: state.auth,
    watchLists: state.watchLists.list.filter(movie => movie.user_id === state.auth.id),
    watchedMovies: state.watchedMovies.list.filter(movie => movie.user_id === state.auth.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteOne(movie) {
      dispatch(deleteMovie(movie))
    },
    deleteWatchedOne(movie) {
      dispatch(deleteWatchedMovie(movie))
    },
    addOne(movie) {
      dispatch(addNewMovie(movie))
    },
    addWatchedOne(movie) {
      dispatch(addWatchedMovie(movie))
    }
  }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UserContainer