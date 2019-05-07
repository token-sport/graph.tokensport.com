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
 * @returns {Object}
 */
const getAllTournaments = async () => {
  try {
    const tournaments = await models.Tournament.findAll();
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
    const tournamentFound = await models.Tournament.findByPk(tournamentUuid);
    return tournamentFound;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createTournament,
  getAllTournaments,
  findTournament
};
