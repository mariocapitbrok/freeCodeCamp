const confirmEnding = (str, target) => {
  const arr = str.split('')
  const lastChars = arr.slice(arr.length - target.length, arr.length)
  return lastChars.join('') === target ? true : false
}

const result = confirmEnding('Bastian', 'n')
console.log(result)
