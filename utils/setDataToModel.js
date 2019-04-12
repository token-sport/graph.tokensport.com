const mongoose = require('mongoose');

/**
 * Set the data into the model and aditionaly It creates the Object ID
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @param {Model} Model Model that you want to set data
 * @param {Object} data Data
 * @returns {Model}
 */
const setDataToModel = (Model, data) => {
  return new Model({
    _id: mongoose.Types.ObjectId(),
    ...data
  })
}

module.exports = setDataToModel;
