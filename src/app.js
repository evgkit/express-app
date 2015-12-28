'use strict';

var express = require('express'),
    posts   = require('./mock/posts.json');

var app = express();

app.get('/', function(req, res) {
    res.send('Wow! It\'s get working!');
});

app.get('/blog', function(req, res) {
    res.send(posts);
});

app.listen(3000, function() {
    console.log('Frontend server is running on port 3000');
});