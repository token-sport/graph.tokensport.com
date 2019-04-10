const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: { type: String, require: true },
  country: { type: String, required: true },
  photo: String,
  coveredMatchs: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
  itemsEdited: [{
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    referees: [{ type: Schema.Types.ObjectId, ref: 'Referee' }],
    matchs: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
    tournaments: [{ type: Schema.Types.ObjectId, ref: 'Tournament' }]
  }],
  tokens: Number
});

module.exports = mongoose.model('Staff', staffSchema);
