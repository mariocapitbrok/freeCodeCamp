const frankenSplice = (arr1, arr2, n) => {
  const clone = [...arr2]
  clone.splice(n, 0, ...arr1)
  return clone
}

const result = frankenSplice([1, 2, 3], [4, 5, 6], 1)
console.log(result)
