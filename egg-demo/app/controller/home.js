'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // Egg 已经封装好了这一层， index.html会默认对应view这个文件夹里的内容
    await ctx.render('index.html', {
      title: '你贵姓？'
    })
  }
  async test() {
    const { ctx } = this;
    ctx.body = "测试接口"
  }
}

module.exports = HomeController;
