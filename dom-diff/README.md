# 生成项目
  ```
  npm -g create-react-app
  create-react-app dom-diff
  ```
# 虚拟dom(virtual dom)
  - 通过js中object对象创建虚拟dom，然后通过特定的render方法将其渲染成真实的dom节点

# DOM Diff
  - dom diff是通过js层面的计算,返回一个path(补丁)对象,再通过特定的操作解析path对象,完成页面的重新渲染

  - 三种优化策略
    1. 只比较平级
    2. 同一层节点位置发生变化,diff直接帮跟新位置,这是key的作用
  - 差异计算
    1. 先序深度优先遍历
      1. 用js对象模拟dom
      2. 把此虚拟dom转成真实dom并插入页面中
      3. 如果有事件发生,修改了虚拟dom那就比较两颗虚拟dom树,得到差异对象
      4. 把差异对象应用到真实的dom树上去