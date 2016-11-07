/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/first-blog');

const db = mongoose.connection

const models = require('./index').models
const routes = require('./index').routes

db.on('open', function() {
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(express.static('client/js/bundle'))
  
  // Handles API/server side routing
  app.use('/api/blogpost', routes.blogPost);
  app.use('/api/user', routes.user);
  
  // Handles client side routing
  app.use('*', routes.home)


  // User.create({
  //   firstName: 'Victoria',
  //   lastName:'Mack',
  //   email: 'victoria_mack24@gmail.com',
  //   location:  "12345",
  //   bio: "Hey I am Victoria and I am awesome.Coming up with filler text on the fly is not easy, but it is becoming more and more of a requirement. Fortunately, some designers and developers around the web know this and have put together a bunch of text generators to help you present your vision.",
  // }, () => {
  //   console.log('New author profile created.')
  // })

  app.listen(5555, function() {
    console.log('Listening on port 5555');
  })
})









