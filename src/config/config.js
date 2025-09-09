'use strict';

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      timestamps: true,
    },
    models: [__dirname + '/../src/models'],
    migrations: [__dirname + '/../src/migrations'],
    seeders: [__dirname + '/../src/seeders'],
    frontendUrl: process.env.FRONTEND_URL,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE + '_test',
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      timestamps: true,
    },
    models: [__dirname + '/../src/models'],
    migrations: [__dirname + '/../src/migrations'],
    seeders: [__dirname + '/../src/seeders'],
    frontendUrl: process.env.FRONTEND_URL,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      timestamps: true,
    },
    models: [__dirname + '/../src/models'],
    migrations: [__dirname + '/../src/migrations'],
    seeders: [__dirname + '/../src/seeders'],
    frontendUrl: process.env.FRONTEND_URL,
  },
};
