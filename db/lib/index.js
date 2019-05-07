/* CONTROLLERS */
const user = require('./user');
const participant = require('./participant');
const match = require('./match');
const stadium = require('./stadium');
const team = require('./team');
const reaction = require('./reaction');
const tournament = require('./tournament');

module.exports = {
  user,
  participant,
  match,
  team,
  reaction,
  tournament,
  stadium
};
