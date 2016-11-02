/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postModel = require('./posts/posts-model')
const Post = mongoose.model('Post');

//let port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/first-blog');

const db = mongoose.connection

const models = require('./index').models
const routes = require('./index').routes

db.on('open', function() {
  console.log('db connection opened');
  
  app.use('*', routes.home)
  app.listen(5555, function() {
    console.log('Listening on port 5555');

    Post.create({
       title: 'making a title'
    }, function (err, data) {
      if(err) console.log('Error with database');
      else console.log('Post created')
    })
  
  
  })
})

app.get('/', function(req, res) {
  res.send('hello')
})

app.get('/blogpost', (req, res) => {
  Post.find({}, function(err, data) {
    console.log('Database data found', data);
     res.send({data:data});
  })
})

//app.post('/blogposts', (req, res)=>{})






