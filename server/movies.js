'use strict'

const db = require('APP/db')
const Movie = db.model('movies')
const Actor = db.model('actors')
const Director = db.model('directors')
const MovieGenre = db.model('movies_genres')
const Role = db.model('roles')
const MovieDirector = db.model('movies_directors')

module.exports = require('express').Router()
  .get('/',
      (req, res, next) =>
        Movie.findAll({include: [{all: true}]})
        .then(movies => res.json(movies))
        .catch(next))

  .get('/:genre',
    (req, res, next) =>
      Movie.findAll({include: [{model: MovieGenre, where: {
        genre: {$like: req.params.genre}
      }}]})
      .then(movies => res.json(movies))
      .catch(next)
    )

  .get('/:name',
    (req, res, next) =>
      Movie.findOne({
        where: {
          name: req.params.name
        },
        include: [{all: true}]
      })
      .then(movie => res.json(movie))
      .catch(next)
    )
  