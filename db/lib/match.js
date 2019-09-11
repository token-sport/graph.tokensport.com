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
    const match = await models.Match.create(matchData);

    return match;
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
    const matches = await models.Match.findAll({
      where: query,
      include: [{
        model: models.Tournament
      }, {
        model: models.Team,
        as: 'localTeamFk'
      }, {
        model: models.Team,
        as: 'awayTeamFk'
      }]
    });

    return matches;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * @async
 * @param {UUID} matchUuid
 * @returns {Object}
 */
const findMatch = async matchUuid => {
  try {
    const matchFound = await models.Match.findOne({
      where: { matchUuid },
      include: [{ all: true, nested: true }]
    });
    return matchFound;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createMatch,
  getMatches,
  findMatch
};
