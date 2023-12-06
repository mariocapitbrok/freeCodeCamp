const findElement = (arr, func) => {
  const reduced = arr.reduce(e => (func(e) === true ? e : undefined))
  console.log(reduced)
}

const res = findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)
//console.log(res)
