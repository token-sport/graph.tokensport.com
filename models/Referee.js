const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refereeSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  photo: String,
  position: {
    shortName: { type: String, required: true },
    longName: { type: String, required: true }
  },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
  editedBy: { type: Schema.Types.ObjectId, ref: 'Staff' }
});

module.exports = mongoose.model('Referee', refereeSchema);
