const findLongestWordLength = str => {
  const sortedWords = str.split(' ').sort((a, b) => b.length - a.length)
  const result = sortedWords[0].length
  return result
}

findLongestWordLength('The quick brown fox jumped over the lazy dog')
