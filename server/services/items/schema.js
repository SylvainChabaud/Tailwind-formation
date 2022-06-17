const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, index: { unique: true } },
  category: {
    label: { type: String },
    value: { type: String }
  },
  group: { type: String }
}, {
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
