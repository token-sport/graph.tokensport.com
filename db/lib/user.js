/* MODELS */
const models = require('../models');

const createUser = async userData => {
  const userCreated = await models.User.create(userData);
  return userCreated.toJSON();
};

const getAllUsers = async () => {
  const users = await models.User.findAll();
  return users;
};

module.exports = {
  createUser,
  getAllUsers
};
