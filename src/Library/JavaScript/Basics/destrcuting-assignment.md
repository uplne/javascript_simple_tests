# Destructing Assignment

The two most used data structures in JavaScript are Object and Array.

* Objects allow us to create a single entity that stores data items by key.
* Arrays allow us to gather data items into an ordered list.

**Destructuring assignment** is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

```
// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
```
## “Destructuring” does not mean “destructive”.

It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. However, the array itself is not modified.

It’s just a shorter way to write:

```
// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
```

## Ignore elements using commas

Unwanted elements of the array can also be thrown away via an extra comma:

```
// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
```

## Works with any iterable on the right-side

```
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
```

That works, because internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.

## Assign to anything at the left-side

We can use any “assignables” on the left side.

For instance, an object property:

```
let user = {};
[user.name, user.surname] = "John Smith".split(' ');
```

## Swap variables trick

```
let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];
```

# The rest ‘…’

Usually, if the array is longer than the list at the left, the “extra” items are omitted.

If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":

```
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

## Default values

If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined:

```
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined
```

# Object destructuring

The destructuring assignment also works with objects.

```
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
```

```
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;
```

## The rest pattern “…”

```
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
```

## Gotcha if there’s no let

```
let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};
```

The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:

```
{
  // a code block
  let message = "Hello";
  // ...
  alert( message );
}
```

So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

```
let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu
```
