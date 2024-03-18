# Template Literals

Template literals provide a more powerful and flexible way to work with strings in JavaScript. They extend the capabilities of string literals, allowing embedded expressions, multi-line strings, and string interpolation.

Template literals are enclosed by backtick ( ) characters instead of the traditional single (' ') or double (" ") quotes.

## String Interpolation

You can embed expressions within template literals using **${expression}** syntax. The expressions in the placeholders and the text between them get passed to a function, resulting in a single string.

## Multi-line Strings

Easily create multi-line strings without the need for concatenation or explicitly including newline characters **(\n)**.

## Tagged Templates

Template literals can be used with a special type of function called a "tagged template." This allows the processing of template literals with a function, giving you control over the string creation process.

```
function highlight(strings, ...values) {
  return strings.reduce((prev, current, i) => {
    return `${prev}${current}<mark>${values[i] || ''}</mark>`;
  }, '');
}

const name = "John";
const domain = "example.com";
const email = highlight`Email: ${name}@${domain}`;
console.log(email);
// Output: Email: <mark>John</mark>@<mark>example.com</mark>
```

The highlight function receives:

* An array of string literals: ["Email: ", "@", ""]
* The evaluated expressions: "John" and "example.com"