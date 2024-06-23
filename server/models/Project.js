const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    id:{type:String} ,
  name:{type:String} ,
  description:{type:String},
  GitHubUrl:{type:String, },
  clientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Client'
  },
 });

 module.exports = mongoose.model('Project', ProjectSchema);