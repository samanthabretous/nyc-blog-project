//Models
const BlogPost = require('./blogPost/blogPost-model');
const home = require('./home/home-router');
const blogPost = require('./blogPost/blogPost-router');

module.exports = {
  models: {
    BlogPost: BlogPost
  },
  routes: {
    home: home, 
    blogPost: blogPost
  }
}