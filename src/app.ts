import * as Koa from "koa";
import * as Bodyparser from "koa-bodyparser";
import * as KoaLogger from "koa-logger"
import { router } from './router';
import { ProjectConfig } from './my.config';
import { errorHandle } from './middlewares/errorHandle';

const { port } = ProjectConfig;
const App = new Koa();

App
	.use(errorHandle)
	.use(Bodyparser({
		enableTypes:['json', 'form', 'text']
	}))
	.use(KoaLogger())
	.use(router.routes())
	.use(router.allowedMethods())

App.listen(port, () => {
	console.log('启动成功：' + port);
});
