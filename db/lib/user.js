const debug = require('debug')('graph.tokensport.com:lib.user');
const { Op } = require('sequelize');

/* MODELS */
const models = require('../models');

/**
 *
 * @async
 * @param {Object} userData
 * @returns {Object}
 */
const createUser = async userData => {
  try {
    const userCreated = await models.User.create(userData);
    return userCreated;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * @async
 * @param {Object} query
 * @returns {Object}
 */
const getUsers = async query => {
  try {
    const users = await models.User.findAll({
      where: query,
      attributes: { exclude: ['password'] }
    });
    return users;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * @async
 * @param {Object} email
 * @returns {Object}
 */
const findUser = async email => {
  try {
    const userFound = await models.User.findOne({ where: { email } });
    return userFound;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * @async
 * @param {UUID} userUuid
 * @param {UUID} matchUuid
 * @returns {Boolean} - Flag to a successful subscription
 */
const subscribeToMatch = async (userUuid, matchUuid) => {
  try {
    const user = await models.User.findOne({
      where: { userUuid }
    });
    await user.addMatches(matchUuid);
    return true;
  } catch (error) {
    debug(error);
    return false;
  }
};

/**
 *
 * This method search all matches and then It filter all of them by a specific user.
 *
 * @async
 * @param {Object} { userUuid, excludePlayed}
 * @returns {Object}
 */
const getMatchesSubscribed = async ({ userUuid, excludePlayed}) => {
  const query = {
    state: {
      [Op.or]: ['INPROGRESS', 'INACTIVE']
    }
  }

  try {
    const matches = models.Match.findAll({
      where: excludePlayed ? query : '',
      include: {
        model: models.User,
        where: {
          userUuid
        },
        order: [['date', 'DESC']]
      }
    });

    return matches;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUsers,
  findUser,
  subscribeToMatch,
  getMatchesSubscribed
};
