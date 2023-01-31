//JS One-liners

// Find the max value in an array:
Math.max(...array)

// Remove duplicates from an array:
[...new Set(array)]

// Generate a random number between 1 and 100:
Math.floor(Math.random() * 100) + 1

// Check if a string is a valid number:
!isNaN(parseFloat(string))

// Get the current date and time:
Date().toString()

// Check if a variable is an array:
Array.isArray(variable)

// Check if a variable is an object:
typeof variable === "object"

// Convert an array to a string:
array.join(",")

// Check if a variable is a function:
typeof variable === "function"

// Convert an object to an array:
Object.values(object)

// Count the occurrences of an element in an array:
array.filter(x => x === element).length

// Create a new object with a dynamic key and value:
{ [key]: value }

// Check if a string is a palindrome:
string === string.split("").reverse().join("")

// Get the the sum of all the numbers in an array
array.reduce((a, b) => a + b, 0));

// Get the current timestamp:
Date.now()

// Check if a variable is null:
variable === null

// Check if a variable is undefined:
typeof variable === "undefined"

// Find the minimum value in an array
Math.min(...array)

// Check if an array is empty:
array.length === 0

// Create a new array with a specified range of numbers:
Array.from({ length: n }, (_, i) => i)
