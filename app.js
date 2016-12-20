//Requirements\\	
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var controller = require('./controllers/controller.js')
var logger = require('morgaon')

//Express App\\
var app = express()
//mongoose.connect('mongodb://localhost/kegkountDB')\\

//App Config\\
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))

//Routes\\


//Listen\\
var port = 3000	
app.listen(port, function(){
	console.log('Server running on port ' + port)
})
