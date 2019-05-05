const debug = require('debug')('graph.tokensport.com:db');

/* MODELS */
const { sequelize } = require('./models');

/**
 * This Function perform the database connection and
 * creates relations between the models.
 *
 * @author Steven Anaya <stvanayar@gmail.com>
 */
const initializeDatabase = async () => {

  /* TESTING CONNECTION */
  try {
    await sequelize.authenticate();
    debug('Database connected...');
  } catch (error) {
    debug(`Error: ${error}`);
    throw error;
  }

  /* SYNC MODELS WITH DATABASE */
  sequelize.sync({ force: true });
}

module.exports = initializeDatabase;
