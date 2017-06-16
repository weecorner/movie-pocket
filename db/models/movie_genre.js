'use strict'

const {INTEGER, STRING, FLOAT} = require('sequelize')

module.exports = db => db.define('movies_genres', {
  movie_id: {
    type: INTEGER,
    defaultValue: null,
    primaryKey: true,
  },

  genre: {
    type: STRING,
    defaultValue: null,
  },
})


module.exports.associations = (Movie_genre, {Movie}) => {
  Movie_genre.belongsTo(Movie)
}