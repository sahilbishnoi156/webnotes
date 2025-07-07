// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Punal got the placement!");
//   }, 2000);
// });

// const data = myPromise
//   .then((res) => console.log(res))
//   .then(() => {
//     setTimeout(() => {
//       console.log("Punal is excited!");
//     }, 2000);
//   }).then(() => {
//     setTimeout(() => {
//       console.log("Punal is working 9-5!");
//     }, 4000);
//   }).then(() => {
//     setTimeout(() => {
//       console.log("Punal got layoff!");
//     },3000);
//   }).catch((err) => {
//     console.error("Error:", err);
//   })


// Chaining promises with setTimeout
// This example demonstrates how to chain promises with setTimeout to handle asynchronous operations sequentially.
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Punal got the placement!");
//   }, 2000);
// });

// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Punal is excited!");
//   }, 2000);
// });

// const finalPromiseData = myPromise1
//   .then((res) => {
//     console.log(res);
//     return myPromise2;
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

// behavior of .then and .catch
// if the promise is rejected, the next .then will not be executed and the control will go to the .catch block which is just after the .then block.

// promise api's
// Promise.all
// This method takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises reject. The resolved value is an array of the resolved values from each promise in the same order as the original array.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise 1 resolved!");
    reject("Promise 1 rejected!");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise 2 resolved!");
    reject("Promise 2 rejected!");
  }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise 3 resolved!");
    reject("Promise 3 rejected!");
  }, 1000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise 4 resolved!");
    reject("Promise 4 rejected!");
  }, 4000);
});

// Promise.all([promise1, promise2, promise3, promise4])
//   .then((results) => {
//     console.log("All promises resolved:");
//     results.forEach((result, index) => {
//       console.log(`Result of promise ${index + 1}: ${result}`);
//     });
//   })
//   .catch((error) => {
//     console.error("One or more promises failed:", error);
//   });

// Promise.race
// This method takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects, with the value or reason from that promise.
// Promise.race([promise1, promise2, promise3, promise4])
//   .then((result) => {
//     console.log("First promise resolved:", result);
//   })
//   .catch((error) => {
//     console.error("First promise rejected:", error);
//   });

// Promise.allSettled
// This method takes an array of promises and returns a single promise that resolves after all of the promises in the array have settled (either resolved or rejected). The resolved value is an array of objects that each describe the outcome of each promise.
// Promise.allSettled([promise1, promise2, promise3, promise4])
//   .then((results) => {
//     console.log("All promises settled:");
//     results.forEach((result, index) => {
//       if (result.status === "fulfilled") {
//         console.log(`Promise ${index + 1} resolved with value: ${result.value}`);
//       } else {
//         console.error(`Promise ${index + 1} rejected with reason: ${result.reason}`);
//       }
//     });
//   })

// Promise.any
// This method takes an array of promises and returns a single promise that resolves as soon as one of the promises in the array resolves, or rejects if all of the promises reject. The resolved value is the value from the first resolved promise.
Promise.any([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => {
    console.error("All promises rejected:", error.errors[0]);
  });