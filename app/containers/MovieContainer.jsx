import React, {Component} from 'react'
import Movie from '../components/Movie'
import {connect} from 'react-redux'
import {addNewMovie} from '../action-creators/watchLists'

const mapStateToProps = (state) =>{
  return {
    selectedMovie: state.movies.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOne(movie) {
      dispatch(addNewMovie(movie))
    }
  }
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(Movie)

export default MovieContainer