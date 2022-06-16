const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  _id: { type: Number },
  name: { type: String, index: { unique: true } },
  category: {
    label: { type: String },
    value: { type: String }
  },
  group: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date }
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

module.exports = mongoose.model('Item', itemSchema);
