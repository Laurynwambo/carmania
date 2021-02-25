const Sequelize = require('sequelize');

const sequelize = require('path');

const picture = sequelize.define('picture', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  frontpicture: {
    type: Sequelize.BINARY,
    allowNull: false,
  },
  backpicture: {
    type: Sequelize.BINARY,
    allowNull: false,
  },
  interiorpicture: {
    type: Sequelize.BINARY,
    allowNull: false,
  },
  leftpicture: {
    type: Sequelize.BINARY,
    allowNull: false,
  },
  rightpicture: {
    type: Sequelize.BINARY,
    allowNull: false,
  },
  timestamps: true,
});

module.exports = picture;
