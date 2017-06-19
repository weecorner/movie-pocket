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
      WatchList.findAll({include: [{all: true}]})
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
    WatchList.create({user_id: req.params.userId, movie_id: req.body.movieId})
      .then(movie => res.status(201).json(movie))
      .catch(next)
    )

  .get('/:userId/:movieId',
    (req, res, next) =>
    WatchList.findOne({
      where: {
        user_id: req.params.userId,
        movie_id: req.params.movieId
      }
    })
    .then(movie =>res.json(movie))
    .catch(next))

  .delete('/:userId/:movieId',
    (req, res, next) =>
    WatchList.destroy({
      where: {
        user_id: req.params.userId,
        movie_id: req.params.movieId
      }
    })
    .then(() =>res.send('Got a delte request'))
    .catch(next))

  // .put('/:userId/:movieId/watched',
  //   (req, res, next) =>
  //   WatchList.destroy({
  //     where: {
  //       user_id: req.params.userId,
  //       movie_id: req.params.movieId
  //     }
  //   })
  //   .then(()=>{
  //     WatchedMovie.create({user_id: req.params.userId, movie_id: req.body.movieId})
  //   })
  //   .then(movie=>res.json(movie))
  //   .catch(next)
  //   )
  