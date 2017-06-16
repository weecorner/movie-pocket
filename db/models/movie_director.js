'use strict'

const {INTEGER, STRING, FLOAT} = require('sequelize')

module.exports = db => db.define('movies_directors', {
  director_id: {
    type: INTEGER,
    defaultValue: null,
  },

  movie_id: {
    type: INTEGER,
    defaultValue: null,
  },
})

module.exports.associations = (Movie_director, {Movie, Director}) => {
  Movie_director.belongsTo(Movie)
  Movie_director.belongsTo(Director)
}