const Router = require('@koa/router');
const { User } = require('../controllers/user');

const router = new Router();

router.get('/user/list', User.list);
router.get('/user/add', User.add);

router.prefix('/api');

module.exports = router;
