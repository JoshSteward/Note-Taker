//setup npm express package 
const express = require('express');

const app = express();

//setup port 
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require roots for both api and html 
//these may require (app) after () however port only worked when removed
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//create port 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  