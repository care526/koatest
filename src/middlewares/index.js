const path = require('path');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const logger = require('koa-logger');
const static = require('koa-static');
const router = require('../routers');

console.log(__dirname);

module.exports = function middlewaresInit(app) {
  app
    .use(bodyparser({
      enableTypes:['json', 'form', 'text']
    }))
    .use(json())
    .use(logger())
    .use(static(path.resolve(__dirname, '../../public')))
    .use(router.routes())
    .use(router.allowedMethods());
}