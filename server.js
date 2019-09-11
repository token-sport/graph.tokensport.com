const { ApolloServer } = require('apollo-server');
const debug = require('debug')('graph.tokensport.com:server');

/* DATABASE */
const initializeDB = require('./db/setup');

/* CONTROLLERS */
const controllers = require('./db/lib');

/* SCHEMA */
const schema = require('./schema');

const server = new ApolloServer({
  schema,
  context: () => ({
    controllers: controllers
  }),
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

/* DB CONNECTION */
initializeDB()
  .then(() => {
    /* SERVER LISTENER */
    server.listen()
      .then(({ url }) => {
        debug(`Server ready at ${url}`);
      });
  });
