const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  router.get('/a/:id', async(ctx) => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: {id}
    })
    ctx.respond = false
  })

  server.use(router.routes())
  // router.get('/test/:id', (ctx) => {
    
  //   ctx.body = `<p>request /test ${ctx.params.id}<p>`
  // })
  // server.use(async (ctx, next) => {
  //   // const path = ctx.path
  //   // const method = ctx.method
  //   // ctx.body = `<span>Koa render${method} ${path}</span>`
  //   await next()
  // })

  // server.use(router.routes())
  // server.use(async (ctx, next) => {
  //   ctx.body = '<span>Koa render2</span>'
  // })
  server.use(async (ctx, next) => { // 中间件就是一个函数，
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(3000, () => {
    console.log('koa is listening 3000:')
  })
})