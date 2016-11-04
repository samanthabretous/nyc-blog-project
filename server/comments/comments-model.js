// ************************************ REQUIRE NPM MODULES ************************************
const mongoose = require('mongoose');

// ************************************ COMMENTS SCHEMA ************************************
const commentsSchema = mongoose.Schema({
  date: {type: Data, default: Date.now},
  author: Number,
  commentBody: String
});

mongoose.model('Comments', commentsSchema);