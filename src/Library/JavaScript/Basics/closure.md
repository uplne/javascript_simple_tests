# Closure

Closure in JavaScript is a powerful and often misunderstood concept that allows for the creation of functions with "private" variables. It's a fundamental aspect of the language, enabling more secure and modular code. To understand closures, we need to delve into how scope and functions work in JavaScript.

## Scope and Functions

In JavaScript, each function creates its own scope: the environment in which the variables it defines are accessible. Variables defined in a function cannot be accessed outside of that function, except if they are returned by the function or if another function is defined within the parent function.

## Understanding Closures

A closure is created when a function generates another function that maintains access to its scope (i.e., the parent's variables). This means that the inner function can access the variables of its outer function even after the outer function has finished executing.

Closures are crucial for several reasons:

* **Data Encapsulation:** They allow for private variables that can't be accessed from outside the closure, providing a way to encapsulate and protect data.
* **Maintaining State:** Closures can maintain state in an asynchronous world. They remember the environment in which they were created, making them ideal for tasks like event handling and callbacks.
* **Module Pattern:** Closures are the backbone of the Module pattern in JavaScript, enabling the creation of public functions that can access private functions and variables.

## Example of a Closure

Let's look at a simple example to illustrate closures:

```
function createGreeting(greetingPrefix) {
    return function(name) {
        console.log(greetingPrefix + ", " + name);
    };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

sayHello("John"); // Outputs: Hello, John
sayHi("Jane"); // Outputs: Hi, Jane
```

In this example, createGreeting is a function that returns another function. The returned function forms a closure because it retains access to the greetingPrefix variable from its parent function's scope. This means you can call sayHello("John") and sayHi("Jane"), and even though createGreeting has already finished executing, the inner function still has access to the greetingPrefix variable that was specific to each invocation.

## Key Points

* A closure is formed when a function (let's call it the inner function) is defined within another function (the outer function) and the inner function has access to the variables within the outer function's scope.
* This mechanism allows for function objects to hold on to state between executions.
* Closures are not explicitly created using a specific syntax in JavaScript; they happen naturally whenever a function is defined within another function and leverages variables from the outer function.

## Use let in loop

The simplest solution when looping is to use let instead of var for your loop variable. let has block scope, which means a new instance is created for each iteration of the loop, correctly capturing the current value for each asynchronous call.

```
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // Each function captures its own i
    }, 1000 * i);
}
```