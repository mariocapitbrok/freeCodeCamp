// Return largest numbers in array

const largestOfFour = arr => {
  return arr.map(a => a.sort((a, b) => b - a)[0])
}

const result = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
])

console.log(result)
