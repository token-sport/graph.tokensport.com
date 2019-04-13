const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  photo: String,
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  dorsal: { type: Number, required: true },
  position: {
    shortName: { type: String, required: true },
    longName: { type: String, required: true }
  },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
  editedBy: [{ type: Schema.Types.ObjectId, ref: 'Staff' }]
});

module.exports = mongoose.model('Player', playerSchema);
