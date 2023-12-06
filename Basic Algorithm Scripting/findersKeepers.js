const findElement = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    //console.log(func(arr[i]), arr[i])
    if (func(arr[i]) === true) return arr[i]
  }
  return undefined
}

const res = findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)
console.log(res)
