const { DataTypes } = require('sequelize');
const sequelize = require('../index'); // Assuming `index.js` initializes Sequelize

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
