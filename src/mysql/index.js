const mysql = require('mysql2');
const mysqlConfig = require('./config');

const pool = mysql
  .createPool(mysqlConfig)
  .promise();

module.exports = pool
