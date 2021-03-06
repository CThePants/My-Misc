/*
Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
*/

var express = require('express');
var path = require('path');
var app = express();

app.get('/search', function(req, res){
    res.send(req.query);
});

app.listen(process.argv[2]);
