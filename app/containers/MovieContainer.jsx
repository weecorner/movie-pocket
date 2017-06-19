import React, {Component} from 'react'
import Movie from '../components/Movie'
import {connect} from 'react-redux'
import {addNewMovie} from '../action-creators/watchLists'
import {addWatchedMovie} from '../action-creators/watchedMovies'

const mapStateToProps = (state) =>{
  return {
    selectedMovie: state.movies.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOne(movie) {
      dispatch(addNewMovie(movie))
    },
    addWatchedOne(movie) {
      dispatch(addWatchedMovie(movie))
    }
  }
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(Movie)

export default MovieContainer