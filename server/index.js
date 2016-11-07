// Require models
const BlogPost = require('./blogPost/blogPost-model');
const Author = require('./user/user-model.js');
const home = require('./home/home-router');

// Require routes
const blogPost = require('./blogPost/blogPost-router');
const user = require('./user/user-router.js');

module.exports = {
  models: {
    BlogPost: BlogPost,
    Author: Author
  },
  routes: {
    home: home, 
    blogPost: blogPost,
    user: user
  }
}