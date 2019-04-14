module.exports = {
  database: process.env.DB_NAME || 'tokensport_develop',
  username: process.env.DB_USER || 'tspuser',
  password: process.env.DB_PASS || 'paulina1257',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};