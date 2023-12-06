// Create a method

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs() {
    return `This dog has ${dog.numLegs} legs.`
  },
}

const result = dog.sayLegs()
console.log(result)
