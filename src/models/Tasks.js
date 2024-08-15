const { DataTypes } = require('sequelize');
const sequelize = require('../index'); // Assuming `index.js` initializes Sequelize

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM('Todo', 'In Progress', 'Done'),
    defaultValue: 'Todo'
  },
  priority: {
    type: DataTypes.ENUM('Low', 'Medium', 'High'),
    defaultValue: 'Medium'
  },
  due_date: {
    type: DataTypes.DATE
  }
});

module.exports = Task;
