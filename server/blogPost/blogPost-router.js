const router = require('express').Router();
const BlogPost = require('mongoose').model('BlogPost');

//Response from the home page
const getBlogPost = (req, res) => {
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


// const router = require('express').Router();
// const Post = require('mongoose').model('Post');



// //Create a new test post in database
// const postPosts = (req, res) => {
//   console.log(req.body)
//   Post.create({title: 'testing123', test: 'sucessfully created a test post'}, () => {
//     console.log('post successfully created');
//   })
// }

// //Configure router for get and post calls
// router.route('/')
//   .get(getPosts)
//   .post(postPosts)


// module.exports = router;