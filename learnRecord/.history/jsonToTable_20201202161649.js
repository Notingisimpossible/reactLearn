const a = {
  Analyst: { name: "Jack", email: "jack@xyz.com" },
  "Loaded by": "Jills",
  "Load id": 34,
  "Study sponsors": [
    { name: "john", email: "john@@xyz.com" },
    { name: "jane", email: "jane@@xyz.com" }
  ]
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
      bfs(json[item][0], result[flag][children])
    } else if (Object.prototype.toString.call(json[item]) === '[object Object]') {
      result.push({
        title: item,
        children: [],
      })
      bfs(json[item], result[flag][children])
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
console.log(getCol(a))
let k = [
  {
    title: 'Analyst',
    children: [
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
      },
    ],
  },
  {
    title: "Loaded by",
    dataIndex: "Loaded by",
    key: "Loaded by",
  },
  {
    title: "Load id",
    dataIndex: "Load id",
    key: "Load id",
  },
]