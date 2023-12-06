const titleCase = str => {
  const arr = str.split(' ')
  const newArr = arr.map(e => {
    let wordArr = [...e]
    const firstLetter = wordArr.shift().toUpperCase()
    const word = firstLetter + wordArr.join('').toLowerCase()
    //console.log(firstLetter, word)
    return word
  })

  return newArr.join(' ')
}

const result = titleCase("I'm a little tea pot")
console.log(result)
