'use strict'

const db = require('APP/db')
const Movie = db.model('movies')
const WatchList = db.model('watch_lists')
const WatchedMovie = db.model('watched_movies')
const User = db.model('users')
const {mustBeLoggedIn, forbidden, selfOnly} = require('./auth.filters')


module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      WatchList.findAll()
        .then(movies => res.json(movies))
        .catch(next))

  .get('/:userId', 
    selfOnly,
    (req, res, next) =>
      WatchList.find({
        where: {
          user_id: req.params.userId
        }
      })
      .then((movies) => res.json(movies))
      .catch(next))

  .post('/:userId',
    (req, res, next) =>
    {console.log('userId is ...', req.params.userId)
    WatchList.create({user_id: req.params.userId, movie_id: req.body.movieId})
      .then(movie => res.status(201).json(movie))
      .catch(next)}
    )

  .get('/:user/:id',
    (req, res, next) =>
    WatchList.findById(req.params.id)
    .then(movie =>res.json(movie))
    .catch(next))

  .delete('/:user/:id',
    (req, res, next) =>
    WatchList.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result) =>res.sendStatus(404))
    .catch(next))

  