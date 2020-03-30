# nextjs 作为koa中间件使用
- 不支持
  1. 数据接口
  2. 数据库的连接
  3. session状态

# next 默认不支持css样式
 - 通过创建next.config.js 并安装 yarn add @zeit/next-css 来支持css

# Router 钩子
  - routeChangeStart
  - routeChangeComplete
  - routeChangeError
  - beforeHistoryChange
  - hashChangeStart
  - hashChangeComplete
  - Router.push({  
    pathname: '',  
    query:{需要传递的参数}  
  })  
  - <Link href="路由" as '装饰路由'><Link>
  - 在server.js中通过(koa-router)router.get方法找到修饰路由对应的路由返回相应数据
# getInitialProps

# document css-in-js
# LazyLoading
# Hooks 让函数组件具有类组件的能力

  