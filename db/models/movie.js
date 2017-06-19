'use strict'

const {STRING, INTEGER, TEXT, FLOAT} = require('sequelize')

module.exports = db => db.define('movies', {
  id: {
    type: INTEGER,
    notNull: true,
    defaultValue: '0',
    primaryKey: true,
  },

  name: {
    type: STRING,
    defaultValue: null,
  },

  year: {
    type: INTEGER,
    defaultValue: null,
  },

  rank: {
    type: FLOAT,
    defaultValue: null,
  },

  image: {
    type: STRING,
    allowNull: true
  }
}, {
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('roles'), include: [db.model('actors')]
      }]
    }),
    genre: () => ({
      include: [{
        model: db.model('movies_genres')
      }]
    }),
    director: () => ({
      include: [{
        model: db.model('movies_directors'), include: [db.model('directors')]
      }]
    })
  }
})

module.exports.associations = (Movie, {Actor, Role, Director, Movie_director, Movie_genre, User, Watch_list, Watched_movie}) => {
  Movie.belongsToMany(Actor, {as: 'actors', through: Role})
  Movie.belongsToMany(Director, {as: 'directors', through: Movie_director})
  Movie.belongsToMany(User, {as: 'lovers', through: Watch_list})
  Movie.belongsToMany(User, {as: 'viewers', through: Watched_movie})
  Movie.hasOne(Movie_genre)
}

