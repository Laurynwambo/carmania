const Sequelize = require('sequelize');

const sequelize = require('path');

const BodyType = sequelize.define('BodyType', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  timestamps: true,
});

module.exports = BodyType;
