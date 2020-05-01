import {createElement, render, renderDom} from './element'
import {diff} from './diff.js'
let vertualDom1 = createElement('ul',{class:'list'},[
  createElement('li',{class:'item'},['aaa']),
  createElement('li',{class:'item'},['bbb']),
  createElement('li',{class:'item'},['ccc'])
])
let vertualDom2 = createElement('ul',{class:'list-group'},[
  createElement('li',{class:'item'},['111']),
  createElement('li',{class:'item'},['bbb']),
  createElement('li',{class:'item'},['333'])
])
let patchs = diff(vertualDom1, vertualDom2)
// let el = render(vertualDom)
// 将虚拟dom转化成真实dom，渲染到页面上
// renderDom(el, window.root)
// console.log(el)

// DOM Diff 比较两个虚拟的dom区别，比较两个对象的区别
// dom diff作用 根据两个虚拟对象创建出补丁,描述改变的内容,将补丁用啦更新dom