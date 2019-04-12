const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  _id: Schema.Types.ObjectId,
  date: { type: String, required: true },
  tournament: { type: Schema.Types.ObjectId, ref: 'Tournament' },
  stadium: { type: String, required: true },
  state: { type: String, required: true },
  assistants: { type: Number, min: 0 },
  bettingBoat: { type: Number, min: 0 },
  timeline: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  totalReactions: { type: Number, min: 0 },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
  localTeamScore: { type: Number, min: 0 },
  awayTeamScore: { type: Number, min: 0 },
  localTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
  awayTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
  referees: [{ type: Schema.Types.ObjectId, ref: 'Referee' }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'Staff' },
  EditedBy: { type: Schema.Types.ObjectId, ref: 'Staff' }
});

module.exports = mongoose.model('Match', matchSchema);
