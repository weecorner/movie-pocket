'use strict'

const {INTEGER, STRING} = require('sequelize')

module.exports = db => db.define('actors', {
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

  gender: {
    type: STRING,
    defaultValue: null,
  },
})

module.exports.associations = (Actor, {Role, Movie}) => {
  Actor.belongsToMany(Movie, {as: 'movies', through: Role})
}
