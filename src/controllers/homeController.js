
const connection = require('../config/database.js');

const getHomePage = (req,res) => {
    return res.render('home.ejs');
}

const getABC = (req,res) => {
    res.render('sample.ejs');
}

const addUser = (req,res) => {
    const {email, name, city} = req.body;

    connection.query(
       ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email,name,city],
        function(err, results){
            res.send('Created user succeed');
            console.log(`>>> email: ${email}, name: ${name}, city: ${city}`);
        }

    )
}

module.exports = {
    getHomePage,
    getABC,
    addUser
};