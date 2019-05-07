const debug = require('debug')('graph.tokensport.com:lib.match');

/* MODELS */
const models = require('../models');

/**
 *
 * @async
 * @param {Object} matchData
 * @returns {Object}
 */
const createMatch = async matchData => {
  try {
    const matchStored = await models.Match.create(matchData);
    return matchStored;
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
const getMatches = async query => {
  try {
    const matches = await models.Match.findAll({ where: query });
    return matches;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createMatch,
  getMatches
};
