/* Removing duplicates from an array*/

const people= ['Ali', 'Uxía', 'David', 'Olatz', 'Anne', 'Ali', 'Jim', 'Anne']

const deduped = Array.from(new Set(people))
console.log(deduped)

/* OR */

const deduped2 = [...new Set(people)]
console.log(deduped2)


/* Returns a range with params stop number, start number and step numbrer */
function range(stop, start = 1, step = 1) {
       return Array.from(
               { length: (stop - start) / step + 1 },
               (_, i) => start + i * step
       );
}

// range (5) returns [1,2,3,4,5]
