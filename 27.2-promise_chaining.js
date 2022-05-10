// Instructions
// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(element => typeof element === "string")) {
            resolve(arr.map(word => word.toUpperCase()));
        } else {
            const error = new Error("Some element in the array is not a string");
            reject(error);
        }
    });
}

const sortWords = (arr) => {
    const newArr = [...arr];
    return new Promise((resolve, reject) => {
        if (arr.every(element => typeof element === "string")) {
            resolve(newArr.sort());
        } else {
            const error = new Error("Some element in the array is not a string");
            reject(error);
        }
    });
}

const arr1 = ["hi", "ma", "nishma", "beseder"];
const arr2 = ["hi", 5, "nishma", "beseder"];

makeAllCaps(arr1)
    .then(sortWords)
    .then(console.log)
    .catch(console.log);

makeAllCaps(arr2)
    .then(sortWords)
    .then(console.log)
    .catch(console.log);