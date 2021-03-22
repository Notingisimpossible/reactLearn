const a = {
  Analyst: { name: "Jack", email: "jack@xyz.com" },
  "Loaded by": "Jills",
  "Load id": 34,
  "Study sponsors": [
    { name: "john", email: "john@@xyz.com" },
    { name: "jane", email: "jane@@xyz.com" }
  ]
};
const getCol = (json) => {
  for (const item in json) {
    console.log(item)
  }
}
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
getCol(a)