# What the are typeof and keyof used for

## typeof

In TypeScript, the typeof operator is used in a type context to obtain the type of a variable, allowing you to create new types based on the structure of existing variables. This is particularly useful for deriving types from existing objects or variables when you want to ensure type consistency without manually duplicating type definitions.

```javascript
let userName = "John Doe";

// Using 'typeof' to derive the type from the variable 'userName'
let anotherUserName: typeof userName;

anotherUserName = "Jane Doe"; // This is valid
anotherUserName = 123; // Error: Type 'number' is not assignable to type 'string'
```

In the example above, typeof userName derives the type string from the variable userName, and anotherUserName is then typed as a string.

typeof can also be used to derive complex object types, making it a powerful tool for working with objects whose exact structure is known but might be too cumbersome to type out manually.

```javascript
const user = {
  name: "John Doe",
  age: 30,
};

// Deriving the type of 'user' object
type UserType = typeof user;

// Now, 'newUser' must have the same structure as 'user'
let newUser: UserType = {
  name: "Jane Doe",
  age: 25,
};

newUser = {
  name: "Bob",
  // Missing 'age' property will cause an error
};
```

typeof is also commonly used in type guards to differentiate between types in conditional blocks:

```javascript
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // TypeScript knows 'id' is a string here
  } else {
    console.log(id); // TypeScript knows 'id' is a number here
  }
}
```

### Limitations

It's important to note that typeof in TypeScript, when used in type contexts, can only derive types that are known at compile time. It is not suitable for determining custom class instances or complex data structures beyond the basic JavaScript types (string, number, boolean, object, symbol, undefined, function) at runtime.

## keyof

In TypeScript, the keyof operator is used to create a union type consisting of all the literal string or numeric keys of a given type. This operator is especially useful when you want to restrict a variable to having a value that is one of the keys of a specific object type or interface.

```javascript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"
```

Now, UserKeys is a union type of the literal types "id", "name", and "email", representing the keys of the User interface.

You can use this type to ensure that variables or function parameters are limited to valid keys of the User interface:

```javascript
function getUserProperty(key: UserKeys) {
  // Function implementation...
}

getUserProperty("name"); // Valid
getUserProperty("age"); // Error: Argument of type '"age"' is not assignable to parameter of type 'UserKeys'.
```

keyof is also useful in combination with indexed access types to safely access properties of objects:

```javascript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

const userName = getProperty(user, "name"); // Type is inferred as string
const userEmail = getProperty(user, "email"); // Type is inferred as string
// const userAge = getProperty(user, "age"); // Error: Argument of type '"age"' is not assignable to parameter of type 'keyof User'.
```

In this example, getProperty is a generic function that takes an object obj of type T and a key key of type K where K is constrained to be a key of T. This ensures type safety when accessing properties on the object, as TypeScript knows the type of the value that is returned based on the key.

### Benefits of keyof
* **Type Safety:** Ensures that only valid keys of a given type are used, reducing runtime errors due to typos or referencing non-existent properties.
* **Autocompletion:** Provides autocompletion for keys, improving developer productivity.
* **Refactoring Support:** If the structure of the interface or type changes, TypeScript will indicate errors where outdated keys are used, making refactoring safer and easier.

## keyof typeof

```javascript
const person = {
  name: "John Doe",
  age: 30,
};

type PersonKeys = keyof typeof person;
// PersonKeys is now "name" | "age"
```

Here's what happens in this example:

* **typeof person** grabs the type of the **person** object, which is effectively **{ name: string; age: number; }**.
* **keyof typeof person** then takes this type and creates a union type of its keys, which is **"name" | "age"**.