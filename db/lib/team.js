const debug = require('debug')('graph.tokensport.com:lib.team');

/* MODELS */
const models = require('../models');

/**
 *
 * This method create first the team in the database and then
 * perform the relation with the join table.
 *
 * @async
 * @param {Object} teamData
 * @returns {Object}
 */
const createTeam = async teamData => {
  const {
    tournaments,
    ...team
  } = teamData;

  try {
    const teamStored = await models.Team.create(team);
    // Set the FK's into the join table
    await teamStored.addTournaments(tournaments);

    return teamStored;
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
const getTeams = async query => {
  try {
    const teams = await models.Team.findAll({
      where: query,
      include: [{ all: true }]
    });

    return teams;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * @async
 * @param {Object} teamUuid
 * @returns {Object}
 */
const findTeam = async teamUuid => {
  try {
    const teamFound = await models.Team.findOne({
      where: { teamUuid },
      include: [{ all: true, nested: true }]
    });

    return teamFound;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createTeam,
  getTeams,
  findTeam
};