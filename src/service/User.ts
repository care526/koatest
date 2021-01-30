// funcs
import { MysqlPool } from '../mysql';
// types
import { OkPacket, RowDataPacket } from 'mysql2';

export class User {
  public async isUserRegister(uid: number) {
    const [ rows ] = await MysqlPool.query<RowDataPacket[]>(
      `SELECT count(*) FROM user where uid = ${uid}`
    );
    return rows[0];
  }

  public async create(uid: number, uname: string) {
    const [ rows ] = await MysqlPool.query<OkPacket>(
      `INSERT INTO user (uid, uname) VALUES (${uid}, '${uname}')`
    );
    return rows.warningCount;
  }
}

export const UserService = new User();
