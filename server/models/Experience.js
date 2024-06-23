const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    id:{type:String},
  company:{type:String} ,
  jobTitle:{type:String},
  dates:{type:String},
  clientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Client'
  }
 });

 module.exports = mongoose.model('Experience', ExperienceSchema);