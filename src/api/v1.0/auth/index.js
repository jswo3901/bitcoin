const Router = require('koa-router');

const auth = new Router();

auth.get('/', (ctx) => {
  ctx.body = 'yayaya!!@@';
});

module.exports = auth;