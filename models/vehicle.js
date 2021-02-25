const Sequelize = require('sequelize');

const sequelize = require('path');

const vehicle = sequelize.define('vehicle', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  regno: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  make: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  color: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  weight: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  mileage: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  timestamps: true,
});

module.exports = vehicle;
