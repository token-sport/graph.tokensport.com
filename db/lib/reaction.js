const debug = require('debug')('graph.tokensport.com:lib.reaction');

/* MODELS */
const models = require('../models');

const createReaction = async reactionData => {
  try {
    const reactionStored = models.Reaction.create(reactionData);
    return  reactionStored;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createReaction
};