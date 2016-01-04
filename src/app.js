'use strict';

var express = require('express'),
    posts   = require('./mock/posts.json'),
    postLists = Object.keys(posts).map(function(value) {
        return posts[value]
    });

//var postLists = posts;

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res) {
    res.render('index', {path: req.path});
});

app.get('/blog/:title?', function(req, res) {
    var title = req.params.title,
        post = posts[title] || {};

    if (undefined !== title) {
        res.render('post', {post: post});
    } else {
        res.status(503);
        res.render('blog', {posts: postLists});
    }
});

app.get('/posts', function(req, res) {
    if (req.query.raw) {
        res.json(posts);
    } else {
        res.json(postLists);
    }

});

app.listen(3000, function() {
    console.log('Frontend server is running on port 3000');
});