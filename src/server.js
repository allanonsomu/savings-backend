require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const logger = require('./utils/logger');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

sequelize.authenticate()
  .then(() => {
    logger.info('Connection to the database has been established successfully.');
    logger.info(`Environment: ${process.env.ENVIRONMENT}`);
  })
  .catch(err => {
    logger.error(`Database Connection error ${err.message}`);
  });

app.get('/', (req, res) => {
  res.send('Welcome to the Savings API!');
});

app.use('/api/v1', require('./routes/routes'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = {
  sequelize,
};
