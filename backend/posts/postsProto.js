const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: String
});


mongoose.model('Post', blogSchema)  