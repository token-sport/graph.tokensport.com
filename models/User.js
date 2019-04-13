const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  country: { type: String, required: true },
  photo: String,
  favTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
  favTournament: { type: Schema.Types.ObjectId, ref: 'Tournament' },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
  matchs: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
  followedMatchs: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
  tokens: Number
});

module.exports = mongoose.model('User', userSchema);

