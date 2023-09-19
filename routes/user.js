// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Route for inserting a new user
router.post('/user/add-user', userController.createUser);

// Route for fetching all users
router.get('/user/get-user', userController.getAllUsers);

// Route for deleting a user by ID
router.delete('/user/delete-user/:id', userController.deleteUser);

module.exports = router;
