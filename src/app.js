'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Wow! It\'s get working!');
});

app.listen(3000, function() {
    console.log('Frontend server is running on port 3000');
});