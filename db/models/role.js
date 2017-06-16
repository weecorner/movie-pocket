'use strict'

const {INTEGER, STRING, FLOAT} = require('sequelize')

module.exports = db => db.define('roles', {
  actor_id: {
    type: INTEGER,
    defaultValue: null,
  },

  movie_id: {
    type: INTEGER,
    defaultValue: null,
  },

  role: {
    type: STRING,
    defaultValue: null,
  },
})

module.exports.associations = (Role, {Movie, Actor}) => {
  Role.belongsTo(Movie)
  Role.belongsTo(Actor)
}