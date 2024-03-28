# Closure

## Use let in loop

The simplest solution when looping is to use let instead of var for your loop variable. let has block scope, which means a new instance is created for each iteration of the loop, correctly capturing the current value for each asynchronous call.


```
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // Each function captures its own i
    }, 1000 * i);
}
```