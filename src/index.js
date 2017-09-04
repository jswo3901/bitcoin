require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();

// 환경변수 로드
const {
  PORT: port
} = process.env;

const router = new Router();
router.use('/api', api.routes());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`hi server is listening to port ${port}`);
});
