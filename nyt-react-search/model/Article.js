// Require in Mongoose MPM
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Article Schema

let ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  URL: {
    type: String,
    required: true
  }
});
const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
