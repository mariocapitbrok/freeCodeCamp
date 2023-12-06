function sumAll(arr) {
  let sorted = arr.slice().sort((a, b) => a - b)
  //console.log(sorted)
  let numbers = []

  for (let n = sorted[0]; n <= sorted[1]; n++) {
    numbers = [...numbers, n]
  }
  //console.log(numbers)
  return numbers.reduce((sum, num) => sum + num)
}

console.log(sumAll([4, 1]))

/*
Sum All Numbers in a Range
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

Tests:
sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.

*/
