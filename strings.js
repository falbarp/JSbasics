/* Find longest word in a string using Reduce */

function findLongestWord (str) {
  return str.split(' ')
    .reduce((longest, word) =>
      word.length > longest.length 
        ? word 
        : longest
  , '')
}

console.log(findLongestWord('Find the longest word'))
