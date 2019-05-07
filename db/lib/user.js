const debug = require('debug')('graph.tokensport.com:lib.user');

/* MODELS */
const models = require('../models');

const createUser = async userData => {
  try {
    const userCreated = await models.User.create(userData);
    return userCreated;
  } catch (error) {
    debug(error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await models.User.findAll();
    return users;
  } catch (error) {
    debug(error);
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers
};
