const debug = require('debug')('graph.tokensport.com:db');

module.exports = {
  database: process.env.DB_NAME || 'tokensport',
  username: process.env.DB_USER || 'tspuser',
  password: process.env.DB_PASS || 'zanahoria19',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  logging: s => debug(s),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    underscored: true
  }
};