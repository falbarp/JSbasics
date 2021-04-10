// How to measure time of execution

const beginingTime = performance.now();
toBeMesured();
const endTime = performance.now();
console.log(`The function execution time is: ${endTime - beginingTime} milliseconds.`);
