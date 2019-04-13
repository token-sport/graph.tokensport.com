/* CONTROLLERS */
const user = require('./user');
const staff = require('./staff');
const match = require('./match');

const dbControllers = {
  user: user,
  staff: staff,
  match: match
};

module.exports = dbControllers;
