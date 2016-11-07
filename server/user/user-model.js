// ************************************ REQUIRE NPM MODULES ************************************
const mongoose = require('mongoose');

 // ************************************ AUTHOR/PROFILE SCHEMA ************************************
 const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: String,
  email: String,
  location: String,
  bio: String, // specify a character limit
  avatar: String,
  blogPosts: [Number],
  comments: [Number], 
  owner: Boolean
 });


// Creates User table based on authorSchema
 mongoose.model('User', userSchema);