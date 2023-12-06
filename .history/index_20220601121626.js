const getIndexToIns = (arr, num) => {
  const sorted = arr.sort((a, b) => a - b)
  for (let i = 0; i < sorted.length; i++) {
    if (num <= sorted[i]) return i
  }
  return sorted.length
}

const result = getIndexToIns([40, 60], 50)
console.log(result)
