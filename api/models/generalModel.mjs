'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const StoreSchema = new Schema({
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

export default mongoose.model('Store', StoreSchema);
