function sentensify(str) {
  // Only change code below this line
  const words = str.split(/[\s\.\,\-]/g)
  const phrase = words.join(' ')
  return phrase

  // Only change code above this line
}

console.log(sentensify('May-the-force-be-with-you'))
