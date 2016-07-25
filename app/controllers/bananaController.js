var bananaController = function(){
var bananaObject = {}
bananaObject.getHome=function(req,res) {
  res.json({message: 'Welcome to our API.'});
  console.log('Hi here is some stringy bananas');
}
return bananaObject;
}
module.exports = bananaController;
