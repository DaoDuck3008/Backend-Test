
const connection = require('../config/database.js');
const {getAllUsers, getEditUser, updateUser} = require('../services/CRUDservice.js');

const getHomePage = async (req,res) => {
    const results = await getAllUsers();
    return res.render('home.ejs', {ListUsers: results});
}

const getABC = (req,res) => {
    res.render('sample.ejs');
}

const postAddUser = async (req,res) => {
    const {email, name, city} = req.body;
    const [result, field] = await connection.query(
        ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,[email,name,city]);
    
    res.send("Created new user!");
}

const getCreatePage = (req,res) => {
    res.render('createUser.ejs');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    const results = await getEditUser(userId);
    res.render('editUser.ejs', {user : results});
}

const postUpdateUser = async (req, res) => {
    const {email, name, city,id} = req.body;
    const results = await updateUser(email, name, city,id);
    console.log(">>> result: ", results);
    res.redirect('/');
}
module.exports = {
    getHomePage,
    getABC,
    postAddUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
};