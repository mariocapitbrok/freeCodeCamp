const findElement = (arr, func) => {
  return arr.reduce(e => func(e) === true)[0]
}

const res = findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)
console.log(res)
