var express = require('express');

var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

console.log(middleware.logger);

// app.use(middleware.requireAuthetication);

app.use(middleware.logger);

app.get('/about',middleware.requireAuthetication,function(req,res){

	res.send('About us!');
});

 app.use(express.static(__dirname + '/public'));

console.log(__dirname);


app.listen(PORT,function(){
	console.log('Express server started at PORT: ' + PORT);
});