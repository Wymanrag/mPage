var express = require('express');
var app = express();

var port = 3000;

app.use(express.static(__dirname + '/public')); // set the static files location
app.listen(port);
console.log("App listening on port " + port);