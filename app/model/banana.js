var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var bananaSchema=new Schema({
  type: String
})
module.exports=mongoose.model('banana',bananaSchema)
