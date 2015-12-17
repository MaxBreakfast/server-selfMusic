var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({
  id: String,
  Name: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
    unique: true
  },
  songs: [{
    type: Schema.Types.ObjectId,
    ref: "Song"
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: true
  }]
});

module.exports = mongooese.model('Room', RoomSchema);
