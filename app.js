/**
 * Created by sohaibnehal on 17/07/2016.
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var async  = require('async');

var app = express();



app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res)
{
    res.render('../HelloWeb.html');
});
app.get('*', function(req, res){
    res.redirect('/');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('Localhost running on 3000')
});