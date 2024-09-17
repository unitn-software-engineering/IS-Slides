var express = require('express');
var app = express();
var util = require('util');

app.use(express.json());
app.use(express.urlencoded());

app.use('/static', express.static('./'));

// Handling GET requests
app.get('/users/:id', function(req, res){
    res.send('Hello'+req.params.id);
    console.log(util.inspect(req.headers, {showHidden: false, depth: null}))
    console.log(util.inspect(req.url, {showHidden: false, depth: null}))
    console.log(util.inspect(req.query, {showHidden: false, depth: null}))
    console.log(util.inspect(req.body))
});

// Handling GET requests
app.post('/users', function(req, res){
    res.send('Hello World!');
});

// Handling Errors
app.use(function(req, res){
    res.send('Not found!');
});

app.listen(3000, function() {
    console.log('Server running on port ', 3000);
});