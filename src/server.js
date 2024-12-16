require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine.js');
const WebRoutes = require('./routes/web.js');
const app = express()
const port = process.env.PORT || 8080;

//config req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//config
configViewEngine(app);

//Khai bao router
app.use('', WebRoutes);

app.listen(port, () =>   {
  console.log(`Example app listening on port ${port}`)
}) 