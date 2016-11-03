const router = require('express').Router();
const BlogPost = require('mongoose').model('BlogPost');

//Response from the home page
const getBlogPost = (req, res, next) => {
  BlogPost.find({}, (err, data) => {
    res.send(data);
  })
}

const createBlogPost = (req, res) =>{
  BlogPost.create({title: 'testing123'}, () => {
    console.log('post successfully created');
  })
}

//configure router for get and post calls
router.route('/')
  .get(getBlogPost)
  .post(createBlogPost)

module.exports = router;
