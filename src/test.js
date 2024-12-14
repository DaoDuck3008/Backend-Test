require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine.js');
const WebRoutes = require('./routes/web.js');
const app = express()
const port = process.env.PORT || 8080;
const connection = require('./config/database.js');

//config
configViewEngine(app);

//Khai bao router
app.use('/v1', WebRoutes);



//simple query
connection.query(
  'SELECT * FROM Users',
  function (err, results, fields){
    console.log(">>> results= ", results);
  }
);

app.listen(port, () =>   {
  console.log(`Example app listening on port ${port}`)
}) 