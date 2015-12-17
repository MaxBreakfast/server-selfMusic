var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
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
  }]
});

module.exports = mongooese.model('Room', RoomSchema);
