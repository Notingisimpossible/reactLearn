// 当节点类型相同时，去看一下属性是否相同

// 产生一个属性的补丁包{type:'ATTRS', attrs: {class:"list-group"}}
// 新的dom节点不在{type: 'REMOVE', index: xxxxx}
// 节点类型不相同，直接采用替换模式{type: 'REPLACE', newNode: newNOde}
// 文本的变化{type: 'TEXT', text: 1}

function diff(oldTree, newTree) {
  let patchs = {} 
  let index = 0
  // 递归树,比较后的结果放到补丁包中
  walk(oldTree, newTree, index, patchs) 
  return patchs
}
function diffAttr(oldAttrs, newAttrs) {
  let patch = {}
  // 判断老的属性和新的属性
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key] // 有可能会出现undefined
    }
  }

  // 新增节点
  for (let key in newAttrs) {
    if(!oldAttrs.hasOwnProperty(key)) {
      console.log(newAttrs[key])
      patch[key] = newAttrs[key] // 有可能会出现undefine
    }
  }
  return patch
}
function diffChildren(oldChildren, newChildren, index, patchs) {
  // 比较老的第一个和新的第一个
  // if (oldChildren.type === oldChildren.type) {
  //   let attrs = diffAttr(oldChildren.props, oldChildren.props)
  // }
  oldChildren.forEach((child, idx) => {
    // 索引不应该是index了---
    // index每次传递给walk时, index是递增的，所有人都基于一个序号
    walk(child, newChildren[idx], ++Index, patchs)
  });
}

function isString(node) {
  return Object.prototype.toString.call(node) === '[object String]'
}
const ATTRS = 'ATTRS'
const TEXT = 'TEXT'
let Index = 0
function walk(oldNode, newNode, index, patchs) {
  let currentPatch = []
  if (isString(oldNode) && isString(newNode)) {
    if (oldNode === newNode){ // 判断文本是否一致
      currentPatch.push({
        type: TEXT,
        text: newNode
      })
    }
  }else if (oldNode.type === newNode.type) {
    // 比较属性是否有更改
    // console.log(oldNode, newNode)
    let attrs = diffAttr(oldNode.props, newNode.props)
    if (Object.keys[attrs].length > 0) {
      currentPatch.push({type: ATTRS, attrs})
    }
    // 如果有子节点 就遍历子节点 
    diffChildren(oldNode.children, newNode.children, index, patchs)
  }
  if(currentPatch.length > 0) {// 当前元素有补丁
    // 将元素和补丁对应起来,放到打补丁中
    patchs[index] = currentPatch
  }
}

export {diff}