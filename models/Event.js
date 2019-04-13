const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  type: { type: String, required: true },
  time: { type: String, required: true },
  match: { type: Schema.Types.ObjectId, ref: 'Match', required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);
