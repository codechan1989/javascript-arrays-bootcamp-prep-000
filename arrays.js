var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)  {
return [element, ...array]
}

function destructivelyaddElementToBeginningOfArray(array, element) {
return [chocolateBars.unshift("element")]
}

function addElementToEndOfArray(array, element)  {
return [...array, element]
}

function accessElementInArray(array, index) {
  console.log(chocolateBars[3])
}