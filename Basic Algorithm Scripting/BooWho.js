const booWho = bool => {
  if (bool === true || bool === false) return true
  return false
}

const res = booWho(null)
console.log(res)
