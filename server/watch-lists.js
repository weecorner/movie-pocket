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

  .post('/',
    (req, res, next) =>
    WatchList.create(req.body)
      .then(movie => res.status(201).json(movie))
      .catch(next)
    )

  .get('/:id',
    (req, res, next) =>
    WatchList.findById(req.params.id)
    .then(movie =>res.json(movie))
    .catch(next))

  .delete('/:id',
    (req, res, next) =>
    WatchList.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result) =>res.sendStatus(404))
    .catch(next))

  