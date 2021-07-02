// return squared array
Array.prototype.square = function() {
  return this.map(number => { return number * number })
}

// cubed array
Array.prototype.cube = function() {
  return this.map(number => { return number ** 3 })
}

// sum of all elements
Array.prototype.sum = function() {
  return this.reduce((a,b) => {return a + b})
}

// average of all elements
Array.prototype.average = function() {
  if (this.length == 0){
    return NaN
  }
  return this.sum() / this.length
}

// return only evens
Array.prototype.even = function() {
  return this.filter(number => number % 2 == 0 )
}

// return only odds
Array.prototype.odd = function() {
  return this.filter(number => number % 2 != 0 )
}