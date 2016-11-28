const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  blogTitle: {type: String, required: true},
  blogAuthor: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  date: { type: Date, default: Date.now },
  location: String, 
  bodyText: String, 
  categories: [String],
  images: String,
  comments: [String]
});


mongoose.model('BlogPost', blogSchema)  

//collage like feel blog that turns the concrete jungle into a circus
//distorted objects
//https://www.behance.net/gallery/24103403/21st-century-21-classics