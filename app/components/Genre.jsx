import React from 'react'
import MoviesContainer from '../containers/MoviesContainer'

export default function Genre (props) {
  const genreName = props.genreName
  const movies = props.movies

  return (
    <div>
      <MoviesContainer movies = {movies} />
    </div>
    )
}