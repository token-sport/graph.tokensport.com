const debug = require('debug')('graph.tokensport.com:lib.team');

/* MODELS */
const models = require('../models');

/**
 *
 *
 * @async
 * @param {Object} teamData
 * @returns {Object}
 */
const createTeam = async teamData => {
  try {
    const teamStored = await models.Team.create(teamData);
    return teamStored;
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
const getAllTeams = async () => {
  try {
    const teams = await models.Team.findAll();
    return teams;
  } catch (error) {
    debug(error);
    throw error;
  }
}

module.exports = {
  createTeam,
  getAllTeams
};