const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { submitContact } = require('../controllers/contactController');

const validateContact = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('message').trim().notEmpty().withMessage('Message is required')
];

router.post('/', validateContact, submitContact);

module.exports = router; 