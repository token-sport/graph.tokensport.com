const Sequelize = require('sequelize');

/* DATABASE */
const setupDatabase = require('../');
const sequelize = setupDatabase();

const models = {
  Match: sequelize.import('./Match'),
  User: sequelize.import('./User'),
  Participant: sequelize.import('./Participant'),
  ParticipantRole: sequelize.import('./ParticipantRole'),
  Tournament: sequelize.import('./Tournament'),
  Team: sequelize.import('./Team'),
  Stadium: sequelize.import('./Stadium'),
  Reaction: sequelize.import('./Reaction')
};

// Associate all matches imported with sequelize
Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;