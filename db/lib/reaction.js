const debug = require('debug')('graph.tokensport.com:lib.reaction');

/* MODELS */
const models = require('../models');

/**
 *
 * This method create first the reaction in the database and then
 * perform the relation with the join table.
 *
 * @async
 * @param {Object} reactionData
 * @returns {Object}
 */
const createReaction = async reactionArgs => {
  const { userUuid, ...reactionData } = reactionArgs;

  try {
    const reaction = await models.Reaction.create(reactionData);

    // Set the FK into the join table
    await reaction.addUsers([userUuid]);

    return reaction;
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
const getReactions = async query => {
  try {
    const reactions = models.Reaction.findAll({
      where: query,
      include: [{ all: true, nested: true }]
    });
    return reactions;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * This method retrieve all the reactions performed by a user.
 * Also It filter the results by MatchUuid, Type and ReactionUuid
 *
 * @async
 * @param {Object} userUuid
 * @returns {Object}
 */
const getUserReactions = async ({ userUuid, query }) => {
  try {
    const reactions = await models.Reaction.findAll({
      where: query,
      include: [{
        model: models.User,
        through: { attributes: [] },
        where: { userUuid }
      },
      {
        model: models.Participant,
        include: [{ model: models.ParticipantRole }]
      },
      { model: models.Match }]
    });

    return reactions;
  } catch (error) {
    debug(error);
    throw error;
  }
};

/**
 *
 * This method retrieve all the reactions related to a participant.
 * Also It filter the results by MatchUuid, Type and ReactionUuid
 *
 * @async
 * @param {UUID - Object} { participantUuid, query }
 * @returns {Object}
 */
const getParticipantReactions = async ({ participantUuid, query }) => {
  try {
    const reactions = await models.Reaction.findAll({
      where: query,
      include: [{
        model: models.Participant,
        where: { participantUuid },
        include: [{
          model: models.ParticipantRole
        },
        { model: models.Team }]
      },
      { model: models.Match }]
    });

    return reactions;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createReaction,
  getReactions,
  getUserReactions,
  getParticipantReactions
};