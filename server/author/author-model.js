// ************************************ REQUIRE NPM MODULES ************************************
const mongoose = require('mongoose');

 // ************************************ AUTHOR/PROFILE SCHEMA ************************************
 const authorSchema = mongoose.Schema({
  name: {
    firstName: {type: String, required: true},
    lastName: {type: String}
  },
  email: String,
  location: String,
  bio: String, // specify a character limit
  avatar: String,
  blogPosts: [Number],
  comments: [Number]
 });


// Creates Author table based on authorSchema
 mongoose.model('Author', authorSchema);