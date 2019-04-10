const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const debug = require('debug')('graph.tokensport.com');
const chalk = require('chalk');

/* SCHEMA */
const schema = require('./schema');

/* ENV VARIABLES */
const PORT = process.env.PORT || 5000;
const IP = process.env.GRAPH_IP || 'localhost';

const app = express();

const server = new ApolloServer({
  schema,
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

server.applyMiddleware({ app });

/* INITIALIZING MONGODB CONECTION WITH MONGOOSE */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tspDevelop', { useNewUrlParser: true }, (err) => {
  if (err) {
    debug('An error occurred when trying to connect to database.');
    throw err;
  }

  debug('Database connection was successful.');
  app.listen(PORT, () => {
    debug(`🚀 Server ready at http://${IP}:${PORT}${server.graphqlPath}`);
    // console.log(`${chalk.white.bgBlue('[graph.tokensport.com]')}: 🚀 Server ready at http://${IP}:${PORT}${server.graphqlPath}`);
  });
})


