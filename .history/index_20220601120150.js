function bouncer(arr) {
  return arr.filter(i => !!i === true)
}

const result = bouncer([7, 'ate', '', false, 9])
console.log(result)
