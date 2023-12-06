const findLongestWordLength = str => {
  const sortedWords = str.split(' ').sort((a, b) => b.length - a.length)
  return sortedWords[0].length
}

const longestWordLength = findLongestWordLength(
  'The quick brown fox jumped over the lazy dog'
)

console.log(longestWordLength)
