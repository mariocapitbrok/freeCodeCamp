function destroyer(arr, ...args) {
  //console.log(...args)
  const excluded = [...args]
  const filtered = arr.slice().filter(n => {
    if (!excluded.includes(n)) return n
  })
  return filtered
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
