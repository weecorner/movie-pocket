import Navbar from '../components/Navbar'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    movies: state.movies
  }
}

const NavbarContainer = connect(
  mapStateToProps)(Navbar)

export default NavbarContainer