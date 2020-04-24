import {createElement, render, renderDom} from './element'

let vertualDom = createElement('ul',{class:'list',id:'test'},[
  createElement('li',{class:'item'},['aaa']),
  createElement('li',{class:'item'},['bbb']),
  createElement('li',{class:'item'},['ccc'])
])

let el = render(vertualDom)
// 将虚拟dom转化成真实dom，渲染到页面上
renderDom(el, window.root)
console.log(el)