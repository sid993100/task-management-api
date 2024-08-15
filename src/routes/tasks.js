const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/auth'); // Import the auth middleware

router.post('/', auth, createTask);       // Protect the create task route
router.get('/', auth, getTasks);          // Protect the get tasks route
router.put('/:taskId', auth, updateTask); // Protect the update task route
router.delete('/:taskId', auth, deleteTask); // Protect the delete task route

module.exports = router;
