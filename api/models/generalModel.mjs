'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const StoreSchema = new Schema({
  data: {
    type: Object,
    required: 'This is a required string field'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending','ready']
    }],
    default: ['ready']
  }
});

export default mongoose.model('Store', StoreSchema);
