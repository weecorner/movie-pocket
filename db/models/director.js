'use strict'

const {INTEGER, STRING} = require('sequelize')

module.exports = db => db.define('directors', {
  id: {
    type: INTEGER,
    allowNull: false, 
    defaultValue: '0',
    primaryKey: true,
  },

  first_name: {
    type: STRING,
    defaultValue: null,
  },

  last_name: {
    type: STRING,
    defaultValue: null,
  },
})

module.exports.associations = (Director, {Movie_director, Movie}) => {
  Director.belongsToMany(Movie, {as: 'movies', through: Movie_director})
}
