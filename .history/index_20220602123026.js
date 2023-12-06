// Only change code below this line
function urlSlug(title) {
  const slug = title
    .trim()
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word.toLowerCase())
    .join('-')

  return slug
}
// Only change code above this line
console.log(urlSlug(' Winter Is  Coming'))
