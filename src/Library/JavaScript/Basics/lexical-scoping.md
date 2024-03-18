# Lexical scoping

Lexical scoping, in simple terms, means that the scope of variables (and this) is determined by where they are defined in the source code, not by where they are executed. In the context of arrow functions, this means this is fixed based on the function's location within the code and does not change based on how the function is called.

## Arrow Functions as Object Methods

When you use an arrow function as a method in an object, this inside that arrow function is not bound to the object itself (as it would be with a traditional function method). Instead, this refers to the scope in which the object is defined, often the global scope if the object is defined at the top level of a script.

Here's an example to illustrate:

```
const obj = {
  traditionalFunc: function() {
    console.log(this); // `this` refers to `obj`
  },
  arrowFunc: () => {
    console.log(this); // `this` is lexically bound to the enclosing scope, not `obj`
  }
};

obj.traditionalFunc(); // Logs `obj`
obj.arrowFunc(); // Logs window/global object or undefined in strict mode
```