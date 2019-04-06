const { NotFoundError } = require('../customErrors');
const debug = require('debug')('graph.tokensport.com');

const match = [
  {
    date: '15/04/2019',
    localTeam: 'Boca Juniors',
    visitorTeam: 'River Plate',
    stadium: 'Bombonera'
  },
  {
    date: '25/04/2019',
    localTeam: 'Colombia',
    visitorTeam: 'Brasil',
    stadium: 'Metropolitano de Barranquilla'
  }
];

/* Main resolver Object:
Put Querys and Mutations handlers here */
const resolvers = {
  Query: {
    matchs: () => match
  },
  Match: {
    date: parent => parent.date,
    localTeam: parent => parent.localTeam,
    visitorTeam: parent => parent.visitorTeam,
    stadium: parent => 'Estadio Default para todos.'
  }
};

module.exports = resolvers;
