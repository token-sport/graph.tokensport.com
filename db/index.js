const Sequelize = require('sequelize');

let sequelize = null;

/**
 * Database singleton connection
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 * @param {Object} config
 * @returns {Class} = Returns the sequelize connection class
 */
const setupDatabase = config => {
  if (!sequelize) {
    sequelize = new Sequelize(config);
  }
  return sequelize;
};

module.exports = setupDatabase;