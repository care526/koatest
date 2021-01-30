import * as Koa from "koa";
import { CODE } from './response.type';

export const ResCodeStatus: {
  [status in CODE]: { code: number, desc: CODE }
} = {
  SUCCESS: { code: 200, desc: "SUCCESS" },
  PARAMMISS: { code: 300, desc: "PARAMMISS" },
  NOPERMISSION: { code: 401, desc: "NOPERMISSION" },
  NOTFOUND: { code: 404, desc: "NOTFOUND" },
  SERVICEERROR: { code: 500, desc: "SERVICEERROR" },
}

export class CreateResBodyData<T> {
  ctx: Koa.ParameterizedContext
  // body
  success: boolean = true;
  code: CODE  = "SUCCESS";
  data: T | null = null;
  message: string = '';

  constructor(ctx: Koa.ParameterizedContext) {
    this.ctx = ctx;
  }

  send() {
    const { success, code, data, message } = this;
    this.ctx.body = { success, code: ResCodeStatus[code].code, data, message };
  }
}