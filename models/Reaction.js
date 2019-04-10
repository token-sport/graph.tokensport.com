const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  type: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  match: { type: Schema.Types.ObjectId, ref: 'Match', required: true },
  player: { type: Schema.Types.ObjectId, ref: 'Player', required: true }
});

module.exports = mongoose.model('Reaction', reactionSchema);
