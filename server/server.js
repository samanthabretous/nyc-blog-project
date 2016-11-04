/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const postModel = require('./blogPost/blogPost-model');
const authorModel = require('./author/author-model.js');
const BlogPost = mongoose.model('BlogPost');
const Author = mongoose.model('Author');

//let port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/first-blog');

const db = mongoose.connection

const models = require('./index').models
const routes = require('./index').routes

db.on('open', function() {
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(express.static('client/js/bundle'))
  
  // Handles API/server side routing
  app.use('/api/blogpost', routes.blogPost);
  app.use('/api/authors', routes.authors);
  
  // Handles client side routing
  app.use('*', routes.home)
  app.listen(5555, function() {
    console.log('Listening on port 5555');
  })
})









