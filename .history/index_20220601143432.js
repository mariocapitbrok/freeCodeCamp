function House(numBedrooms) {
  this.numBedrooms = numBedrooms
}

let myHouse = new House(3)

const result = myHouse instanceof House
console.log(result)

let myHouse2 = {
  numBedrooms: 2,
}

console.log(myHouse2 instanceof House)
