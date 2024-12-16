const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getCreatePage, addUser} = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/createPage', getCreatePage);
router.post('/addUser', addUser);

module.exports = router; 