import {connect} from 'react-redux'
import Genre from '../components/Genre'

const mapStateToProps = function(state) {
  return {
    movies: state.movies
  }
}

const GenreContainer = connect (mapStateToProps)(Genre)

export default GenreContainer