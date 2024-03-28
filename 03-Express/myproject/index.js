var express = require('express');
var app = express();
var util = require('util');

// Handling GET requests
app.get('/', function(req, res){
    res.send('Hello World!');
    console.log(util.inspect(req.headers, {showHidden: false, depth: null}))
    console.log(util.inspect(req.url, {showHidden: false, depth: null}))
    console.log(util.inspect(req.query, {showHidden: false, depth: null}))
});


// Handling GET requests
app.post('/users', function(req, res){
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Server running on port ', 3000);
});