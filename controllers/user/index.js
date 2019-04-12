const debug = require('debug')('graph.tokensport.com:controller');
const bcrypt = require('bcrypt');

/* UTILS */
const setDataToModel = require('../../utils/setDataToModel');

/* MODELS */
const User = require('../../models/User');
const Reaction = require('../../models/Reaction');

/**
 * @author Steven Anaya <stvanayar@gmail.com>
 * @async
 * @param {Object} data - User data
 * @returns {Object} Returns the user stored in the DataBase
 * @throws {DatabaseError}
 */
const createUser = async userData => {
  const passHash = await bcrypt.hash(userData.password, 5);
  const newData = {
    ...data,
    password: passHash,
    role: userData.role || 'USER'
  };
  const newUser = setDataToModel(User, newData);

  try {
    const storedUser = await newUser.save();
    debug(`User ${storedUser._id} created`);
    return storedUser;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

/**
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @async
 * @param {Object} reactionData
 * @returns {Object} - Returns reaction saved object
 */
const createReaction = async reactionData => {
  const newReaction = setDataToModel(Reaction, reactionData);

  try {
    const storedReaction = await newReaction.save();
    debug(`Reaction ${storedReaction._id} saved`);
    return storedReaction;
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }
};

module.exports = {
  createUser,
  createReaction
};
