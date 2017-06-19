'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MyAwesomeReactComponent from './MyAwesomeReactComponent'
import NavbarContainer from './containers/NavbarContainer'
import MoviesContainer from './containers/MoviesContainer'
import MovieContainer from './containers/MovieContainer'
import GenreContainer from './containers/GenreContainer'
import axios from 'axios'


import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import {receiveMovies, getMovieById, getMoviesByGenre} from './reducers/movies'

const injectTapEventPlugin = require('react-tap-event-plugin')
injectTapEventPlugin()

const onAppEnter = () => {
  axios.get('/api/movies')
  .then(res => res.data)
  .then(data => store.dispatch(receiveMovies(data)))
}

const onMovieEnter = (nextRouterState) => {
  const movieId = nextRouterState.params.movieId
  store.dispatch(getMovieById(movieId))
}

const onGenreEnter = (nextRouterState) => {
  const genreName = nextRouterState.params.genreName
  store.dispatch(getMoviesByGenre(genreName))
}

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>(
    <div>
      <MuiThemeProvider /*muiTheme={getMuiTheme(darkBaseTheme)}*/>
        <div>
          <NavbarContainer />
          <div>
            {children}
          </div>
        </div>
      </MuiThemeProvider>
    </div>
    ))
    
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp} onEnter={onAppEnter}>
        <IndexRedirect to="/movies" />
        {/*<Route path="/jokes" component={Jokes} />*/}
        <Route path='/movies' component={MoviesContainer} />
        <Route path='/movies/:movieId' component={MovieContainer} onEnter={onMovieEnter} />
        <Route path='/:genreName' component={GenreContainer} onEnter={onGenreEnter}/>
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
