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

  .get('/genres/:genre',
    (req, res, next) =>{
      Movie.findAll({include: [{model: MovieGenre, where: {
        genre: {$like: req.params.genre}
      }}]})
      .then(movies => res.json(movies))
      .catch(next)}
    )

  .get('/:id', 
      (req, res, next) =>{
      Movie.findOne({include: [{all: true}], where: {id: req.params.id}})
        .then(movie => res.json(movie))
        .catch(next)})


  
  