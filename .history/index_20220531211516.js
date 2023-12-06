const findElement = (arr, func) => {
  const reduced = arr.filter(e => func(e) === true)
  return reduced[0]
}

const res = findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)
console.log(res)
