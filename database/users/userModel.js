var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: String,
  Token: String,
  Name: String
});

module.exports = mongooese.model('User', UserSchema);
