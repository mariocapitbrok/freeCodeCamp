const obj = { apple: 1, bat: 2 }

for (let entry in Object.entries(obj)) {
  console.log(obj[entry])
}
