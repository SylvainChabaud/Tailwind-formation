const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, index: { unique: true } },
  category: { type: String, enum: ['A', 'B', 'C', 'D'] },
  group: { type: String }
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
    getters: true
  },
  toJSON: {
    virtuals: true,
    getters: true
  }
});

module.exports = itemSchema;
