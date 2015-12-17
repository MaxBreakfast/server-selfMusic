var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
  title: type: String,
  uri: type: String
});
module.exports mongoose.model('Song', SongSchema);