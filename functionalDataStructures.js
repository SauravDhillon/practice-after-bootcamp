// Practicing .filter() array method 
const anArrayMixedElements = [1, "hello", 80, "world", 24, "javascript", 6, 99,"LHL", 12, "bootcamp", 45, 3];

const filteredArray = anArrayMixedElements.filter((item) => typeof item === 'number');

console.log(filteredArray);

// Practicing .find() method
const higherThanFifty = filteredArray.find((item) => item > 50);

console.log(higherThanFifty);

// Practicing .reduce() method
const sumOfAllNumbers = filteredArray.reduce(((item, sum) => item + sum), 0);

console.log(sumOfAllNumbers);

// Finding longest book published before 1960
const listOfBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'fiction',
    published: 1925,
    pages: 180
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'fiction',
    published: 1951,
    pages: 224
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'fiction',
    published: 1960,
    pages: 281
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'fiction',
    published: 1949,
    pages: 328
  },
 {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    genre: 'fiction',
    published: 1968,
    pages: 210
  },

];

function findLongestBookPublishedBefore(year, books){
  const filteredBooks = books.filter((book) => book.published < year);
  const longestBook = filteredBooks.reduce((acc, currentValue) => currentValue.pages > acc.pages ? currentValue : acc); // Here we are checking if current book has higher number of pages than next book (acc) if yes then as per ternary operator return current book 
  return { title: longestBook.title, author: longestBook.author}
}

console.log(findLongestBookPublishedBefore(1960, listOfBooks));