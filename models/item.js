var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
}, { collection: 'dataItems' });

module.exports = mongoose.model('Item', itemSchema);
