var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)  {
return [element, ...array]
}

function destructivelyaddElementToBeginningOfArray(array, element) {
return [element, array]
}

function addElementToEndOfArray(array, element)  {
return [...array, element]
}

function accessElementInArray(array, index) {
  return [3]
}