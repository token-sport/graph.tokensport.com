const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  photo: { type: String, required: true },
  season: { type: String, required: true },
  state: { type: String, required: true },
  teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  matchs: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
  editedBy: { type: Schema.Types.ObjectId, ref: 'Staff' }
});

module.exports = mongoose.model('Tournament', tournamentSchema);
