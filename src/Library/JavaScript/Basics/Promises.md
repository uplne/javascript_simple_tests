# Promises

JavaScript Promises are a powerful feature used to handle asynchronous operations. They represent a value that may be available now, in the future, or never. Promises allow you to attach callbacks to an asynchronous action without nesting them, leading to more readable code, especially when dealing with complex asynchronous logic. They can be in one of three states:

* **Pending:** The initial state of a Promise. The operation has not completed yet.
* **Fulfilled:** The operation completed successfully, and the Promise has a resolved value.
* **Rejected:** The operation failed, and the Promise has a reason for the failure.

The main methods for handling promises are .then(), .catch(), and .finally().

## Basic Example of a Promise

```
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  // cleaning the room
  let isClean = true; // Change this to false to see the "rejected" path

  if (isClean) {
    resolve('Clean');
  } else {
    reject('Not Clean');
  }
});

promiseToCleanTheRoom.then(function(fromResolve) {
  console.log('The room is ' + fromResolve);
}).catch(function(fromReject) {
  console.log('The room is ' + fromReject);
});
```

In this example, a promiseToCleanTheRoom is created with a condition. If isClean is true, the promise is fulfilled (resolved), and the .then callback runs. If isClean is false, the promise is rejected, and the .catch callback runs.

## Chaining Promises

Promises can be chained to perform a sequence of asynchronous operations in a more readable manner.

```
function cleanRoom() {
  return new Promise((resolve) => resolve('Room Cleaned'));
}

function removeGarbage(previousResult) {
  return new Promise((resolve) => resolve(previousResult + ' > Garbage Removed'));
}

function winIceCream(previousResult) {
  return new Promise((resolve) => resolve(previousResult + ' > Won Ice Cream'));
}

cleanRoom().then(result => removeGarbage(result))
           .then(result => winIceCream(result))
           .then(result => console.log('Finished: ' + result));
```

## Error Handling

Error handling in promises can be managed with .catch(), which catches any error that occurs during the promise chain.

```
cleanRoom()
  .then(removeGarbage)
  .then(winIceCream)
  .catch(error => console.log('Failed: ' + error));
```

## Quirks and Tips

* **Error Propagation:** If any promise in the chain is rejected, the subsequent .then() callbacks are skipped, and control moves to the nearest .catch() handler.
* **Promise.all():** Allows you to wait for all promises to resolve before proceeding. It’s particularly useful when you have multiple asynchronous operations that are independent of each other and need to be synchronized at some point.

```
Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(results => {
  console.log('All finished', results);
}).catch(error => {
  console.log('Failed', error);
});
```

* **Promise.race():** Returns the result of the first promise to settle (either resolve or reject). It’s useful for timeout patterns or taking the result of the first completed task in a set of concurrent tasks.

* **Initialization:** A common quirk is the immediate execution of the executor function (the function passed to the new Promise). The code within this function runs immediately, not asynchronously.

* **Unhandled Rejections:** Modern JavaScript environments help detect unhandled promise rejections, but it’s good practice to always have a .catch() at the end of your promise chains or use try/catch with async/await to handle errors gracefully.

# async/await

**async/await** is syntactic sugar built on top of Promises that allows you to write asynchronous code that looks and behaves a bit more like synchronous code, which can make it easier to understand and maintain. An async function always returns a promise, and await pauses the execution of the async function until the promise is resolved.

```
async function asyncOperation() {
  try {
    const result = await doSomething; // Pauses until doSomething is resolved
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncOperation();
```

## Key Differences

* **Syntax:** Promises use .then() and .catch() methods for chaining asynchronous operations, while async/await uses a more synchronous-looking approach, allowing you to write code that appears linear and is often easier to read and debug.
* **Error Handling:** In promise chains, errors are handled using .catch(), while async/await uses the traditional try/catch syntax. This can make error handling more intuitive for developers familiar with synchronous error handling.
* **Return Values:** async functions implicitly wrap the return value in a Promise. This means you can use await with any function that returns a Promise and treat it as though it returns the actual result.
* **Flow Control:** async/await makes it simpler to perform a series of asynchronous operations in sequence. With Promises alone, achieving the same effect requires chaining .then() calls, which can become cumbersome for complex operations.

## Async Functions Return Promises

When you declare a function with the async keyword, JavaScript automatically ensures that this function returns a Promise. This is true even if the body of the function returns a non-promise value. Essentially, the return value of an async function is implicitly wrapped in a Promise.

Example without async:

```
function normalFunction() {
  return "Hello, world!";
}
const result = normalFunction();
console.log(result); // Output: Hello, world!
```

In the above, normalFunction returns a string directly.

Example with async:

```
async function asyncFunction() {
  return "Hello, world!";
}
const result = asyncFunction();
console.log(result); // Output: Promise {<resolved>: "Hello, world!"}
```

Here, asyncFunction still returns "Hello, world!", but because it's an async function, the return value is wrapped in a Promise that resolves with the string "Hello, world!".

## Awaiting Promises

The await keyword can only be used inside async functions (excluding top-level await in modules) and is used to wait for a Promise to settle (either resolve or reject). When you await a Promise, the execution of the async function is paused until the Promise settles. The key part here is that await unwraps the settled value from the Promise:

* If the Promise is resolved, await returns the resolved value.
* If the Promise is rejected, await throws the rejection value, which can be caught using try/catch blocks.

Using await with async function:

```
async function asyncGreeting() {
  return "Hello, async world!";
}

async function greet() {
  try {
    const greeting = await asyncGreeting(); // Waits for the Promise to resolve
    console.log(greeting); // Output: Hello, async world!
  } catch (error) {
    console.error(error);
  }
}

greet();
```

In this example, asyncGreeting returns a Promise that resolves with the string "Hello, async world!". The greet function, which is also an async function, uses await to wait for asyncGreeting's Promise to resolve. The key point is that await asyncGreeting() returns the actual string "Hello, async world!", not a Promise. This makes the code look and behave as if it was synchronous, even though it's handling asynchronous operations.

