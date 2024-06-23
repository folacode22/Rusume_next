const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    id:{type:String},
  title:{type:String} ,
  summary:{type:String},
  articleUrl:{type:String},
  clientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Client'
  }
 });

 module.exports = mongoose.model('Article', ArticleSchema);