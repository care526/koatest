"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const KoaRouter = require("@koa/router");
const User_1 = require("../controller/User");
const router = new KoaRouter();
exports.router = router;
router.prefix('/api');
router.post('/user/create', User_1.UserController.create);
