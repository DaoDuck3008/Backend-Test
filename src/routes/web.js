const express = require('express');
const router = express.Router();
const {getHomePage, getABC, addUser} = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/abc', getABC);
router.post('/addUser', addUser);

module.exports = router; 