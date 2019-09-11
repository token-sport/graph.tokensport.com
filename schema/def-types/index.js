const path = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

const typeArray = fileLoader(path.join(__dirname, './'));

module.exports = mergeTypes(typeArray, { all: true });