const debug = require('debug')('graph.tokensport.com:lib.stadium');

/* MODELS */
const models = require('../models');

/**
 *
 * @async
 * @param {Object} stadiumData
 * @returns {Object}
 */
const createStadium = async stadiumData => {
  try {
    const stadiumStored = await models.Stadium.create(stadiumData);
    return stadiumStored;
  } catch (error) {
    debug(error);
    throw error;
  }
};


/**
 *
 * @async
 * @param {Object} stadiumUuid
 * @returns {Object}
 */
const findStadium = async stadiumUuid => {
  try {
    const stadiumFound = await models.Stadium.findByPk(stadiumUuid);
    return stadiumFound;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createStadium,
  findStadium
};
