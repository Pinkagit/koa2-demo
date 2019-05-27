const Koa = require('koa');
const static = require('koa-static');
const body = require('koa-body');
const path = require('path');
const Router = require('koa-router')();
const Config = require('./config/index')
const log = require('./log')

const app = new Koa();

// 静态资源相对于app.js的路径
const staticPath = './static';

// middlewares
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})
app.use(static(
    path.join(__dirname, staticPath)
))
app.use(Router.routes(), Router.allowedMethods())

// router
Router.get('/test', async(ctx) => {
    console.log("!!!")
    ctx.response.body = "test!"
})

// 监听端口
app.listen(Config.port, () => {
    console.log(`Server listening on port ${Config.port}.`);
})
