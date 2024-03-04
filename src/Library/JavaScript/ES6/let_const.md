# 'let' and 'const' Keywords for Variable Declarations

* 'let' allows you to declare block-scoped variables, significantly improving the control over variable's lifecycles.
* 'const' is used to declare variables meant to be constant throughout their lifecycle, also block-scoped.

## Advantages of let and const Over var

### Block Scope:

* var is function-scoped, which can lead to unexpected behavior in block statements like if, for, or while.
* let and const are block-scoped, meaning they only exist within the nearest enclosing block, reducing the risk of errors from variable redeclarations and providing better control over the variables' lifecycles.

### No Hoisting:

* Variables declared with var are hoisted to the top of their function scope, initialized with undefined, making them accessible before their declaration line.
* let and const are also hoisted but are not initialized, leading to a ReferenceError if accessed before declaration, which helps in catching undeclared variable errors.

### Immutability:

* const ensures that a variable cannot be reassigned, making your code more predictable when you declare values that are meant to remain constant through the application.

### Temporal Dead Zone:

* The period between entering the block and the declaration is known as the temporal dead zone for let and const, where accessing them throws an error, enhancing code safety and maintainability.

### Prevents Re-declaration:

* In the same scope, let and const prevent the redeclaration of the same name, avoiding common errors and making the code more robust.

### Examples

**var** vs. **let** in Block Scope

```
if (true) {
  var varVariable = "I am var";
  let letVariable = "I am let";
}
console.log(varVariable); // Output: "I am var"
console.log(letVariable); // ReferenceError: letVariable is not defined
```

### Temporal Dead Zone

#### How it Works

* When a variable is declared using let or const, it is hoisted to the top of its enclosing block scope, but it is not initialized with a value, not even undefined (unlike variables declared with var, which are initialized with undefined).
* If you try to access the variable in the block before it is declared, JavaScript will throw a ReferenceError because you're trying to access a variable that is in the TDZ.
* Once the execution reaches the variable declaration, it leaves the TDZ, gets initialized (either with a specific value or undefined in the case of let), and can be safely accessed.

#### Purpose of the TDZ
The TDZ improves code readability and maintainability by ensuring that variables cannot be accessed before they are properly declared and initialized. This helps prevent errors that arise from the misuse of variables, contributing to cleaner, more predictable code.

```
console.log(myVar); // Output: undefined
var myVar = 5;

console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;
```

