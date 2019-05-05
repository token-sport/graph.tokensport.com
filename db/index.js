const Sequelize = require('sequelize');

/* CONFIG */
const config = require('./config');

let sequelize = null;

/**
 * Database singleton connection
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @returns {Class} = Returns the sequelize connection class
 */
const setupDatabase = () => {
  if (!sequelize) {
    sequelize = new Sequelize(config);
  }
  return sequelize;
};

module.exports = setupDatabase;