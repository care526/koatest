"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Bodyparser = require("koa-bodyparser");
const KoaLogger = require("koa-logger");
const router_1 = require("./router");
const my_config_1 = require("./my.config");
const App = new Koa();
App
    .use(Bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
    .use(KoaLogger())
    .use(router_1.router.routes())
    .use(router_1.router.allowedMethods());
App.listen(my_config_1.port, () => {
    console.log('启动成功：' + my_config_1.port);
});
