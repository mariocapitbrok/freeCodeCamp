function House(numBedrooms) {
  this.numBedrooms = numBedrooms
}

let myHouse = new House(3)

console.log(myHouse instanceof House)

let myHouse2 = {
  numBedrooms: 2,
}

console.log(myHouse2 instanceof House)
