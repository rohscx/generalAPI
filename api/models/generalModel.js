
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StoreSchema = new Schema({
  dataString: {
    type: String,
    required: 'This is a required string field'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed','ready']
    }],
    default: ['ready']
  }
});

module.exports = mongoose.model('Store', StoreSchema);
