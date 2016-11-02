/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postModel = require('./blogPost/blogPost-model')
const BlogPost = mongoose.model('BlogPost');

//let port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/first-blog');

const db = mongoose.connection

const models = require('./index').models
const routes = require('./index').routes

db.on('open', function() {
  app.use('/blogpost', routes.blogPost)
  app.use('*', routes.home)
  app.listen(5555, function() {
    console.log('Listening on port 5555');

    BlogPost.create({
       title: 'making a title'
    }, function (err, data) {
      if(err) console.log('Error with database');
      else console.log('Post created')
    })
  
  })
})









