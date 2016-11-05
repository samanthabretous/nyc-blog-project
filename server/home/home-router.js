const path = require('path')
const router = require('express').Router();
const rootPath = path.join(__dirname, '../../');

//Response from the home page
const home = (req, res) => {
  console.log('home route')
  res.sendFile(rootPath + './client/index.html');
}

//configure router for get calls
router.route('/')
  .get(home)

module.exports = router;