
const connection = require('../config/database.js');

const getHomePage = (req,res) => {
    return res.render('home.ejs');
}

const getABC = (req,res) => {
    res.render('sample.ejs');
}

const addUser = async (req,res) => {
    const {email, name, city} = req.body;
    const [result, field] = await connection.query(
        ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,[email,name,city]);
    
    console.log(">>> result: ", result);
    res.send("Created new user!");
}

const getCreatePage = (req,res) => {
    res.render('createUser.ejs');
}

module.exports = {
    getHomePage,
    getABC,
    addUser,
    getCreatePage
};