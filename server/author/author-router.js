const router = require('express').Router();
const Author = require('mongoose').model('Author');

// ***** Retrieves authors in DB
const getAuthor = (req, res, next) => {
  Author.find({}, (err, data) => {
    res.send(data);
  });
};

// ***** Creates new author and stores in Author model in DB
const createAuthor = (req, res) => {
  Author.create({
    console.log('AUTHOR REQUEST:', req.body);
  })
}

// ***** Routing for GET and POST requests
router.route('/')
  .get(getAuthor)
  .post(createAuthor);

  module.exports = router;