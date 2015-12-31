'use strict';

var express = require('express'),
    posts   = require('./mock/posts.json');

var app = express();

app.get('/', function(req, res) {
    res.send('<h1>Wow! Express JS is working!</h1>');
});

app.get('/blog/:title?', function(req, res) {
    var title = req.params.title,
        post = posts[title];

    if (undefined !== title) {
        res.send(post);
    } else {
        res.status(503);
        res.send('<p>Halt! Page is under construction</p>');
    }

});

app.listen(3000, function() {
    console.log('Frontend server is running on port 3000');
});