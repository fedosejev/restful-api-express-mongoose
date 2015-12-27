var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  day: {
    type: Number
  },
  text: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  }
});

module.exports = mongoose.model('Task', taskSchema);