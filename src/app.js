const Koa = require('koa');
const onerror = require('koa-onerror');
const middlewaresInit = require('./middlewares');

const app = new Koa();
middlewaresInit(app);

// error handler
onerror(app);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

console.log('restart1');

app.listen(3000);
