console.log("*****Objects*****");
console.log("*****Activity 1 - Object Creation and Access*********");
console.log("_____Task 1_____");
const book = {
  title: "Book Title",
  author: "Book Author",
  year: "1998",
  getInfo: () => {
    return `${book.title} by ${book.author}`;
  },
  getYear: (newYear) => {
    book.year = newYear;
  },
  getYearTitle: () => {
    return `${this.year} and ${this.title}`;
  },
};
console.log(book);

console.log("_____Task 2_____");
console.log("title", book.title);
console.log("author", book.author);

console.log("*****Activity 2 - Object Methods*********");
console.log("_____Task 3_____");
console.log(book.getInfo());

console.log("_____Task 4_____");
console.log("Before update:", book.year);
book.getYear("1988");
console.log("After update:", book.year);

console.log("*****Activity 3 - Nested Objects*********");
console.log("_____Task 5_____");
const library = [
  { book: "Abc", name: "div" },
  { book: "efg", name: "nim" },
  { book: "hij", name: "tim" },
];
console.log(library);

console.log("_____Task 6_____");
const bookList = library.map((book) => {
  return book.book;
});
const nameList = library.map((name) => {
  return name.name;
});
console.log(bookList);
console.log(nameList);

console.log("*****Activity 4 - The this Keyword*********");
// console.log("_____Task 7_____");
// console.log(book.getYearTitle());
console.log("*****Activity 4 - The this Keyword*********");
console.log("_____Task 8_____");
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}
console.log("_____Task 9_____");
console.log("Keys:");
Object.keys(book).map((key) => {
  console.log(key);
});
console.log("__________________________________");
console.log("Values:");
Object.values(book).map((value) => {
  console.log(value);
});
