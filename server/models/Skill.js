const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    id:{type:String},
  name:{type:String} ,
  level:{type:String},
  clientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Client'
  }
 });

 module.exports = mongoose.model('Skill', SkillSchema);