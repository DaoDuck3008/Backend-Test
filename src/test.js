require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine.js');
const WebRoutes = require('./routes/web.js');
const app = express()
const port = process.env.PORT || 8080;
const mysql = require('mysql2');

//config
configViewEngine(app);

//Khai bao router
app.use('/v1', WebRoutes);

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit'
});

//simple query
connection.query(
  'SELECT * FROM Users',
  function (err, results, fields){
    console.log(">>> results= ", results);
    console.log(">>> fields=", fields);
  }
);

app.listen(port, () =>   {
  console.log(`Example app listening on port ${port}`)
}) 