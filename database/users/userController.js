var User = require('./userModel');

module.exports = {
  findAllUsers: function(req, res) {
    User.find({}, function(err, docs) {
      if(err){
        console.error(err);
      }else{
        res.json(docs);
      }
    })
  },

  login = function(req, res){}
}
