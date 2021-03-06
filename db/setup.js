const debug = require('debug')('graph.tokensport.com:db');

/* MODELS */
const { sequelize } = require('./models');

/**
 * This Function perform the database connection and
 * creates relations between the models.
 *
 * @async
 * @author Steven Anaya <stvanayar@gmail.com>
 */
const initializeDatabase = async () => {

  /* CONNECTION TEST */
  try {
    await sequelize.authenticate();
    debug('Database connected...');
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }

  /* SYNC MODELS WITH DATABASE */
  sequelize.sync({ force: false, match: /_develop$/ });
}

module.exports = initializeDatabase;