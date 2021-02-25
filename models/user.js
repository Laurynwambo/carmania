const Sequelize = require('sequelize');

const sequelize = require('../database');

const user = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  timestamps: true,
});

module.exports = user;
