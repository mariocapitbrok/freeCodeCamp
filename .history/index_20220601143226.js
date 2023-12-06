function House(numBedrooms) {
  this.numBedrooms = numBedrooms
}

let myHouse = new House(3)

const result = myHouse instanceof House
console.log(result)
