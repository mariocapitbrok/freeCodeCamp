const chunkArrayInGroups = (arr, size) => {
  let newArr = []
  let group = []

  for (let i = 0; i < arr.length; i++) {
    group.push(arr[i])
    if (group.length === size) {
      newArr.push(group.slice(0, size))
      group = []
    }
  }

  if (group.length > 0) newArr.push(group.slice(0, size))

  return newArr
}

const result = chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)
console.log(result)
