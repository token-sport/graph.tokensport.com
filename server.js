const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const debug = require('debug')('graph.tokensport.com');
const chalk = require('chalk');

/* SCHEMA */
const schema = require('./schema');

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

app.listen(PORT, () => {
  console.log(`${chalk.white.bgMagenta('[graph.tokensport.com]')}: 🚀 Server ready at http://${IP}:${PORT}${server.graphqlPath}`);
});
