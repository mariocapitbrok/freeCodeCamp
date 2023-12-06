// constructor
function House(numBedrooms) {
  this.numBedrooms = numBedrooms
}

// create a new house object as an instance
let myHouse = new House(3)

console.log(myHouse instanceof House)

// create a new house object independently
let myHouse2 = {
  numBedrooms: 2,
}

console.log(myHouse2 instanceof House)
