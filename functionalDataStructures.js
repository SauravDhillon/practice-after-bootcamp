// Practicing .filter() array method 
const anArrayMixedElements = [1, "hello", 80, "world", 24, "javascript", 6, 99,"LHL", 12, "bootcamp", 45, 3];

const filteredArray = anArrayMixedElements.filter((item) => typeof item === 'number');

console.log(filteredArray);

// Practicing .find() method
const higherThanFifty = filteredArray.find((item) => item > 50);

console.log(higherThanFifty);