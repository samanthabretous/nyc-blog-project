// Require models
const BlogPost = require('./blogPost/blogPost-model');
const Author = require('./author/author-model.js');
const home = require('./home/home-router');

// Require routes
const blogPost = require('./blogPost/blogPost-router');
const authors = require('./author/author-router.js');

module.exports = {
  models: {
    BlogPost: BlogPost,
    Author: Author
  },
  routes: {
    home: home, 
    blogPost: blogPost,
    authors: authors
  }
}