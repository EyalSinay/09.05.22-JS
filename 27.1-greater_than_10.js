// Instructions
// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

const isGreaterThanTen = (num) => {
    debugger
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + " It's greater than 10!");
        } else {
            reject(num + " It's less than 10.");
        }
    });
}

isGreaterThanTen(3)
    .then(console.log)
    .catch(console.log)
    .finally(() => {console.log("finally1")});

isGreaterThanTen(13)
    .then(console.log)
    .catch(console.log)
    .finally(() => {console.log("finally2")});