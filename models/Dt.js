const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dtSchema = new Schema({
  name: { type: String, required: true },
  photo: String,
  country: { type: String, required: true },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  role: { type: String, required: true },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
  editedBy: { type: Schema.Types.ObjectId, ref: 'Staff' }
});

module.exports = mongoose.model('Dt', dtSchema);