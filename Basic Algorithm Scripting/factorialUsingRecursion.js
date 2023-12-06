// Factorial of a number with recursive function.

const factorial = num => {
  if (num === 0) return 1
  return num * factorial(num - 1)
}

console.log(factorial(5))
