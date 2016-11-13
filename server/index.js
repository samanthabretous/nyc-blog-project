// Require models
const BlogPost = require('./blogPost/blogPost-model');
const User = require('./user/user-model.js');

// Require routes
const home = require('./home/home-router');
const blogPost = require('./blogPost/blogPost-router');
const user = require('./user/user-router.js');

module.exports = {
  models: {
    BlogPost: BlogPost,
    User: User
  },
  routes: {
    home: home, 
    blogPost: blogPost,
    user: user
  }
}