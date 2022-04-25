/* Removing duplicates from an array*/

const people= ['Ali', 'Uxía', 'David', 'Olatz', 'Anne', 'Ali', 'Jim', 'Anne']

const deduped = Array.from(new Set(people))
console.log(deduped)

/* OR */

const deduped2 = [...new Set(people)]
console.log(deduped2)
