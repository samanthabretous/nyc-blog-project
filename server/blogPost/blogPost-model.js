const mongoose = require('mongoose');
const authorSchema = null;
const commentSchema = null;

const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  //author: [authorSchema],
  date: { type: Date, default: Date.now },
  location: String, 
  bodyText: String, 
  categories: [String],
  images: String,
  //comments: [commentSchema]
});


mongoose.model('BlogPost', blogSchema)  

//collage like feel blog that turns the concrete jungle into a circus
//distorted objects
//https://www.behance.net/gallery/24103403/21st-century-21-classics