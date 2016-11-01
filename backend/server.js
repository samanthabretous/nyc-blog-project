const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postProto = require('./posts/postsProto')
const Post = mongoose.model('Post');

mongoose.connect('mongodb://localhost/first-blog');

const db = mongoose.connection

db.on('open', function() {
  console.log('db connection opened');
  
  app.listen(5555, function() {
    console.log('Listening on port 5555');

    Post.create({
      title: 'test post 1'
    }, function (err, data) {
      if(err) console.log('Error with database');
      else console.log('Post created')
    })
    
    Post.find({}, function(err, data) {
      console.log('Database data found', data);
    })
  
  })
})

app.get('/', function(req, res) {
  res.send('Test');
})

app.get('/post', function(req, res) {
  res.send('Post test');
})



