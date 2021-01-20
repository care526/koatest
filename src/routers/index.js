const Router = require('@koa/router');
const { list } = require('../controllers/user');

const router = new Router();

router.get('/a', async (ctx, next) => {
  ctx.body = 'a'
})
router.get('/user/list', list);

router.prefix('/api');

module.exports = router;
