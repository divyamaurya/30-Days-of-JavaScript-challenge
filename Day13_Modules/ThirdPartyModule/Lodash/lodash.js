const _ = require("lodash");

// Use the _.chunk function to split an array into chunks of size 2
const array = [1, 2, 3, 4, 5, 6];
const chunkArray = _.chunk(array, 2);

console.log("Chunked array: ", chunkArray);
