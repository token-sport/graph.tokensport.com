const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// SCHEMA
const schema = require('./schema');

const PORT = process.env.PORT || 5000;

const app = express();

const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

app.listen(PORT, () => {
	console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
})

