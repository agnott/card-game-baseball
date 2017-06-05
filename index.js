//Setup environment variables
require('dotenv').config();

//Create general variables
let ENV     = process.env,
    io      = require('socket.io'),
    express = require('express');

//Create the app
let app = express();

//Set up static file sending
app.use(express.static('public'));

//Start express server
app.listen(ENV.PORT, function(){
  console.log(`App running on port ${ENV.PORT}`);
});
