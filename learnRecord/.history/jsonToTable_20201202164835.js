const a = {
  Analyst: { name: "Jack", email: "jack@xyz.com" },
  "Loaded by": "Jills",
  "Load id": 34,
  "company": [
    { companyName: "XHZY", companyAddress: "zhejiang" }
  ],
};
const bfs = (obj, arr) => {
  const mid = [];
  for (const item in obj) {
    if (typeof obj[item] !== 'object') {
      arr.push({
        title: item,
        dataIndex: item,
        key: item,
      });
    } else {
      arr.push(mid);
      bfs(obj[item][0], mid);
    }
  }
}
const getCol = (json) => {
  let result = [];
  let flag = 0;
  for (const item in json) {
    if(Object.prototype.toString.call(json[item]) === '[object Array]') {
      result.push({
        title: item,
        children: [],
      })
      bfs(json[item][0], result[flag]["children"])
    } else if (Object.prototype.toString.call(json[item]) === '[object Object]') {
      result.push({
        title: item,
        children: [],
      })
      bfs(json[item], result[flag]["children"])
    } else {
      result.push({
        title: item,
        dataIndex: item,
        key: item,
      })
    }
    flag++;
  }
  return result
}
const flattenJson = (json) => {
  for(let item in json) {
    if(typeof json[item] === 'object') {
      for(let items in json[item]) {
        json[items] = json[item][items]
      }
      delete json.item
    }
  }
}
console.log(flattenJson(a))