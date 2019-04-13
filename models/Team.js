const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  lineup: { type: String, required: true },
  stadium: { type: String, required: true },
  country: { type: String, required: true },
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  dts: [{ type: Schema.Types.ObjectId, ref: 'Dt' }],
  tournaments: [{ type: Schema.Types.ObjectId, ref: 'Tournament' }],
  matchs: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
  editedBy: { type: Schema.Types.ObjectId, ref: 'Staff' }
});

module.exports = mongoose.model('Team', teamSchema);
