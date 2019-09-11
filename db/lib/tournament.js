const debug = require('debug')('graph.tokensport.com:lib.tournament');

/* MODELS */
const models = require('../models');

/**
 *
 * @async
 * @param {Object} tournamentData
 * @returns {Object}
 */
const createTournament = async tournamentData => {
  try {
    const tournamentStored = await models.Tournament.create(tournamentData);
    return tournamentStored;
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
const getTournaments = async query => {
  try {
    const tournaments = await models.Tournament.findAll({
      where: query,
      include: [{ all: true, nested: true }]
    });
    return tournaments;
  } catch (error) {
    debug(error);
    throw error;
  }
};


/**
 *
 * @async
 * @param {Object} tournamentUuid
 * @returns {Object}
 */
const findTournament = async tournamentUuid => {
  try {
    const tournamentFound = await models.Tournament.findOne({
      where: { tournamentUuid },
      include: [{ all: true, nested: true }]
    });
    return tournamentFound;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createTournament,
  getTournaments,
  findTournament
};
