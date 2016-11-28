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
  BlogPost.create(req.body, (err, data) => {
    if (err) console.log("error making post")
    else {
      console.log('post successfully created');
      res.send(data)
    }
  })
}

const deleteBlogPost =(req, res) =>{
  BlogPost.remove(req.body, (err) =>{
    if(err)console.log(err)
  })
}

const updateBlogPost = (req, res) => {
  console.log(req.body)
  BlogPost.update(
    {_id: req.body.id}, 
    {    
      blogTitle: req.body.blogTitle,
      blogAuthor: req.body.blogAuthor,
      location: req.body.location, 
      bodyText: req.body.bodyText, 
      categories: req.body['categories[]']
    }, 
    {upsert: true}, 
    (err) => {
      console.log('there was an error')
    }
  );
}

const getOneBlogPost = (req, res) => {
  BlogPost.findById(req.params.id)
    .populate('blogAuthor')
    .exec((err, data) => {
      res.send(data);
    }
  )
};

//configure router for get and post calls
router.route('/:id')
  .get(getOneBlogPost)

router.route('/')
  .get(getBlogPost)
  .post(createBlogPost)
  .delete(deleteBlogPost)
  .put(updateBlogPost)




module.exports = router;
