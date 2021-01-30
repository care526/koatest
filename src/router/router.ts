import * as KoaRouter from "@koa/router";
import { UserController } from '../controller/User';

const router = new KoaRouter();
router.prefix('/api');

router.post('/user/create', UserController.create);
router.post('/user/isUserRegister', UserController.isUserRegister);

export {
  router
};
