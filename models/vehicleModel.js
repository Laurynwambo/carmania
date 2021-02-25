const Sequelize = require('sequelize');

const sequelize = require('path');

const VehicleModel = sequelize.define('VehicleModel', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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

module.exports = VehicleModel;
