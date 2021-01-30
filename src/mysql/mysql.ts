import * as mysql2 from 'mysql2';
import mysqlConfig from './config'; 

export const MysqlPool = mysql2
  .createPool(mysqlConfig)
  .promise();
