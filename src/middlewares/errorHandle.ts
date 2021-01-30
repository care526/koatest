import * as Koa from 'koa';
import { ResCodeStatus, CreateResBodyData } from '../utils/response';

export async function errorHandle(
  ctx: Koa.ParameterizedContext,
  next: Koa.Next
) {
  const resBody = new CreateResBodyData<boolean>(ctx);

	try {
		await next();
	} catch (error) {
    resBody.success = false;
    resBody.code = ResCodeStatus.SERVICEERROR.desc;
    resBody.message = String(error);
    resBody.send();
	}
}