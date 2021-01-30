import * as Koa from "koa";
// services
import { UserService } from '../service/User';
// funcs
import { MysqlPool } from '../mysql';
import { ResCodeStatus, CreateResBodyData } from '../utils/response';
// types
import { OkPacket, RowDataPacket } from 'mysql2';

class User {
  // @POST('user/create')
  public async isUserRegister(
    ctx: Koa.ParameterizedContext,
    next: Koa.Next,
  ) {
    const resBody = new CreateResBodyData<boolean>(ctx);
    const { uid } = ctx.request.body;
    const result = await UserService.isUserRegister(uid);

    if (result) {
      resBody.data = result['count(*)'] > 0;
    } else {
      resBody.success = false;
      resBody.code = ResCodeStatus.SERVICEERROR.desc
    }

    resBody.send();
  }

  public async create(
    ctx: Koa.ParameterizedContext,
    next: Koa.Next
  ) {
    const { uid, uname } = ctx.request.body;
    try {
      const [ rows ] = await MysqlPool.query<OkPacket>(
        `INSERT INTO user (uid, uname) VALUES (${uid}, '${uname}')`
      );
      ctx.body = rows.warningCount;
      // ctx.body = '添加成功';
    } catch (error) {
      ctx.body = error;
    }
  }
}
export const UserController = new User();
