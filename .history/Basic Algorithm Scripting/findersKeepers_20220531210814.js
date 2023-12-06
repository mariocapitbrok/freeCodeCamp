const findElement = (arr, func) => {
  const reduced = arr.reduce(e => func(e) === true)
  console.log(reduced[0])
}

const res = findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)
console.log(res)
