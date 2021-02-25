const Sequelize = require('sequelize');

const sequelize = require('path');

const VehicleMake = sequelize.define('VehicleMake', {
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
  created_by: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  updated_by: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  timestamps: true,
});

module.exports = VehicleMake;
