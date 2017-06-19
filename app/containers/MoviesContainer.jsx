import React, {Component} from 'react'
import {connect} from 'react-redux'
import Movies from '../components/Movies'
//import {addNewMovie} from '../reducers/watchLists'

const mapStateToProps = (state, ownProps) => ({
  movies: ownProps.movies? ownProps.movies : state.movies,
  user: state.auth
})

const mapDispatchToProps = dispatch => {
  return {
    addOne(movie){
      dispatch(addNewMovie(movie))
    }
  }
}
const MoviesContainer = connect(mapStateToProps, mapDispatchToProps)(Movies)

export default MoviesContainer