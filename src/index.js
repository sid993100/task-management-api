const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Initialize Sequelize
const sequelize = new Sequelize(config.development);

// Test DB connection
sequelize.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
});

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/tasks', require('./routes/tasks'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
