import React, {Component} from 'react'
import WatchLists from '../components/WatchLists'
import {connect} from 'react-redux'
import {addNewMovie} from '../action-creators/watchLists'
import {deleteMovie} from '../action-creators/watchLists'
import {addWatchedMovie} from '../action-creators/watchedMovies'
import {deleteWatchedMovie} from '../action-creators/watchedMovies'


const mapStateToProps = (state) =>{
  return {
    user: state.auth,
    watchLists: state.watchLists.list.filter(movie => movie.user_id === state.auth.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteOne(movie) {
      dispatch(deleteMovie(movie))
    }
  }
}

const WatchListsContainer = connect(mapStateToProps, mapDispatchToProps)(WatchLists)

export default WatchListsContainer