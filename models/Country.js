const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  photo: { type: String, required: true },
  tournaments: [{ type: Schema.Types.ObjectId, ref: 'Tournament' }],
  editedBy: { type: Schema.Types.ObjectId, ref: 'Staff' }
});

module.exports = mongoose.model('Country', countrySchema);
