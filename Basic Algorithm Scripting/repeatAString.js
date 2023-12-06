const repeatStringNumTimes = (str, num) => {
  let newStr = ''
  for (let i = 0; i < num; i++) {
    newStr = newStr.concat(str)
  }
  return newStr
}

const res = repeatStringNumTimes('abc', 3)
console.log(res)
