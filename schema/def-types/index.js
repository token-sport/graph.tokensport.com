const path = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

const typesArrays = fileLoader(path.join(__dirname, './'));

module.exports = mergeTypes(typesArrays, { all: true });