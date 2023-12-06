const truncateString = (str, num) => {
  let truncated = str.slice(0, num).concat('...')
  if (str.length > num) return truncated
  return str
}

const res = truncateString('A-tisket a-tasket A green and yellow basket', 8)
console.log(res)
