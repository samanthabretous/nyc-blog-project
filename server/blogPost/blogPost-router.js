const router = require('express').Router();
const BlogPost = require('mongoose').model('BlogPost');

//Response from the home page
const getBlogPost = (req, res, next) => {
  BlogPost.find({}, (err, data) => {
    res.send(data);
  })
}

const createBlogPost = (req, res) =>{
  console.log(typeof req.body.blogAuthor)
  BlogPost.create({
    blogTitle: req.body.blogTitle,
    blogAuthor: req.body.blogAuthor,
    location: req.body.location, 
    bodyText: req.body.bodyText, 
    categories: req.body['categories[]'],
  }, () => {
    console.log('post successfully created');
  })
}

const deleteBlogPost =(req, res) =>{
  BlogPost.remove(req.body, (err) =>{
    if(err)console.log(err)
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
  .delete(deleteBlogPost)




module.exports = router;
