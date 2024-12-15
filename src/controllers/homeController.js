
const connection = require('../config/database.js');

const getHomePage = (req,res) => {
    let users = [];
    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields){
          users = results;
          console.log(">>> results= ", results);
          console.log(">>> users= ",users);
          res.send(JSON.stringify(users));
        }
      );
}

const getABC = (req,res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage,
    getABC
};