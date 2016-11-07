const router = require('express').Router();
const User = require('mongoose').model('User');

// ***** Retrieves authors in DB
const getUser = (req, res, next) => {
  User.find({}, (err, data) => {
    res.send(data);
  });
};

// ***** Creates new author and stores in User model in DB
const createUser = (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    location:  req.body.location
  }, () => {
    console.log('New author profile created.')
  })
}

const getOneUser = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    res.send(data);
  })
};

//configure router for get and post calls
router.route('/:id')
  .get(getOneUser)

// ***** Routing for GET and POST requests
router.route('/')
  .get(getUser)
  .post(createUser);

module.exports = router;