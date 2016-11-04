// ************************************ REQUIRE NPM MODULES ************************************
const mongoose = require('mongoose');

 // ************************************ AUTHOR/PROFILE SCHEMA ************************************
 const authorSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: String,
  email: String,
  location: String,
  bio: String, // specify a character limit
  avatar: String,
  blogPosts: [Number],
  comments: [Number]
 });


// Creates Author table based on authorSchema
 mongoose.model('Author', authorSchema);