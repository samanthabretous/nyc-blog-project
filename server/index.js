//Models
const Posts = require('./posts/posts-model');
const home = require('./home/home-router');
//const posts = require('./posts/posts-router');

module.exports = {
  models: {
    Posts: Posts
  },
  routes: {
    home: home
  }
}