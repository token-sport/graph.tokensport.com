const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refereeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  country: { type: String, required: true },
  photo: String,
  role: { type: String, required: true },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
  editedBy: { type: Schema.Types.ObjectId, ref: 'Staff' }
});

module.exports = mongoose.model('Referee', refereeSchema);
