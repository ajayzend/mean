var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');

var http = require('http').Server(app);
// Connect to Mongoose
mongoose.connect(config.database, { useMongoClient: true }, function (err) {
   if(err)
       console.log(err);
    else
        console.log('Connected to database');
});

app.use(bodyParser.urlencoded({ extended: true })); // true means we can parse images, videos & string as well else only we can parse string only.
app.use(bodyParser.json());

app.use(morgan('dev')); // It's log all the request on the console

var api = require('./app/routes/api')(app, express);
app.use('/api', api);

app.get('*', function (req, res) {
   res.send("Hello12 World!.");
});

http.listen(config.port, function (err) {
    if(err)
        throw err;
    else
        console.log('Runnging1 on port: '+config.port);
});
