const mongoose = require('mongoose');

const DesignSchema = new mongoose.Schema({
    id:{type:String},
  name:{type:String} ,
  description:{type:String},
  imageUrl:{type:String},
  clientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Client'
  }
 });

 module.exports = mongoose.model('Design', DesignSchema);