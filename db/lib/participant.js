const debug = require('debug')('graph.tokensport.com:lib.participant');

/* MODELS */
const models = require('../models');

/**
 *
 * @async
 * @param {Object} participantData
 * @returns {Object}
 */
const createParticipant = async participantData => {
  try {
    const participantStored = await models.Participant.create(participantData);
    return participantStored;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * @async
 * @param {Object} query
 * @returns {Object} - Include all direct associations in the result object
 */
const getParticipants = async query => {
  try {
    const participants = await models.Participant.findAll({
      where: query,
      include: [{ all: true, nested: true }]
    });
    return participants;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * @async
 * @param {Object} participantUuid
 * @returns {Object} - Include all direct associations in the result object
 */
const findParticipant = async participantUuid => {
  try {
    const participant = await models.Participant.findOne({
      where: { participantUuid },
      include: [{ all: true, nested: true }]
    });
    return participant;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * @async
 * @param {Object} roleData
 * @returns {Object}
 */
const createParticipantRole = async roleData => {
  try {
    const roleStored = await models.ParticipantRole.create(roleData);
    return roleStored;
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
const getParticipantRoles = async query => {
  try {
    const roles = await models.ParticipantRole.findAll({ where: query });
    return roles;
  } catch (error) {
    debug(error);
    return error;
  }
};

module.exports = {
  createParticipant,
  getParticipants,
  findParticipant,
  createParticipantRole,
  getParticipantRoles
};
