const { ApolloServer } = require('apollo-server');
const debug = require('debug')('graph.tokensport.com:server');

/* DATABASE */
const setupDataBase = require('./db');
const config = require('./db/config');

/* SCHEMA */
const schema = require('./schema');

const server = new ApolloServer({
  schema,
  // context: () => ({
  //   controllers: controllers
  // }),
  formatError: error => {
    const { code, errorName } = error.extensions.exception;
    debug(`[${code}] - ${errorName} : ${error.message}`);
    return {
      statusCode: code,
      errorName: errorName,
      message: error.message
    }
  }
});

/* TEST DB CONNECTION */
const db = setupDataBase(config);
db.authenticate()
  .then(() => debug('Database Connected...'))
  .catch(err => debug(`Error: ${err}`))

/* SERVER LISTENER */
server.listen()
  .then(({ url }) => {
    debug(`Server ready at ${url}`);
  });
