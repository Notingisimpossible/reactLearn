function flatten (group) {

  const result = []

  group.forEach(kid => bfs(kid, []))

  return result

  function bfs (node, path) {

    if (!node.group/* or path.length === 2 */) {

      const [building_number, floor_number] = path

      result.push({ building_number, floor_number, room_number: node.value })

    } else {

      path.push(node.value)

      node.group.forEach(kid => bfs(kid, path))

      path.pop()

    }

  }

}

let obj = [{
  name: 'Jim',
  age: 18,
  address: '浙江',
  like: '形意拳',
  children: [
    {
      father: 'aj',
      mother: 'ak',
      children: [
        {
          father: 'aj',
          mother: 'ak',
        },
      ],
    },
  ],
}]

console.log(flatten(obj))