var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname + "/src"));


var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port: 3000');
});


