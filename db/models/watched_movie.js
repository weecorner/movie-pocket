'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('watched_movies')

module.exports.associations = (Watched_movie, {User, Movie}) => {
  Watched_movie.belongsTo(User)
  Watched_movie.belongsTo(Movie)
}
