'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('watch_lists')

module.exports.associations = (Watch_list, {User, Movie}) => {
  Watch_list.belongsTo(User)
  Watch_list.belongsTo(Movie)
}
