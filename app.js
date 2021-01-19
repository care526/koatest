const Koa = require('koa');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger')
const mysql = require('mysql');
const mysqlConfig = require('./mysql.config');

const app = new Koa();

const mysqlPool = mysql.createPool(mysqlConfig)

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(async (ctx, next) => {
  await new Promise((res, rej) => {
    mysqlPool.query('SELECT * from users', (error, results, fields) => {
      if (error) {
        rej();
        return;
      }
      ctx.body = results;
      res();
    })
  })
  // pool.getConnection((err, connection) => {
  //   if (err) {}
  //   connection.query('SELECT * from ceshidata')
  // })

  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(3000);
