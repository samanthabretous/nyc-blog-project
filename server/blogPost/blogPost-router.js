const router = require('express').Router();
const BlogPost = require('mongoose').model('BlogPost');

//Response from the home page
const getBlogPost = (req, res, next) => {
  BlogPost.find({}, (err, data) => {
    res.send(data);
  })
}

const createBlogPost = (req, res) =>{
  console.log(req.body)
  BlogPost.create(req.body, () => {
    console.log('post successfully created');
  })
}
const getOneBlogPost = (req, res) => {
  BlogPost.findById(req.params.id, (err, data) => {
    res.send(data);
  })
};

//configure router for get and post calls
router.route('/:id')
  .get(getOneBlogPost)

router.route('/')
  .get(getBlogPost)
  .post(createBlogPost)




module.exports = router;
