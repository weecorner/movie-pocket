'use strict'

const db = require('APP/db')
const Movie = db.model('movies')
const WatchList = db.model('watch_lists')
const WatchedMovie = db.model('watched_movies')
const User = db.model('users')
const {mustBeLoggedIn, forbidden, selfOnly} = require('./auth.filters')

module.exports = require('express').Router()
  .put('/to-watched/:userId/:movieId')