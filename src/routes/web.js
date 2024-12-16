const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getCreatePage, postAddUser, getUpdatePage, postUpdateUser} = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/createPage', getCreatePage);
router.get('/updateUser/:id', getUpdatePage);

router.post('/addUser', postAddUser);
router.post('/update-User', postUpdateUser)

module.exports = router; 