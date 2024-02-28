# ENUM

Using enums over types in TypeScript can be a strategic choice based on the needs of your application. Here are several reasons to consider using enums over types:

## 1. Enumerated Values

Enums allow you to enumerate possible values for a variable. This is especially useful when you have a known set of values that a variable can take, and you want to ensure your code is clear and easy to understand. Enums enforce that the variable must be one of the specified values, reducing errors.

```javascript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function move(direction: Direction) {
  // Function body
}

// Usage
move(Direction.Up); // Correct
move(10); // Error: 10 is not assignable to type 'Direction'
```

## 2. Runtime Object

Unlike types, enums are real objects that exist at runtime. This means you can iterate over enums, get a list of their keys/values, and use them in a way that you can't with types.

```javascript
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

console.log(Color); // { Red: 'RED', Green: 'GREEN', Blue: 'BLUE' }

// Iterating over the enum
for (let color in Color) {
  console.log(color); // 'Red', 'Green', 'Blue'
}
```

## 3. Reverse Mapping

Enums in TypeScript have a feature that types do not: reverse mapping. For numeric enums, TypeScript generates a mapping from enum values to enum names. This can be useful when you need to get the name of an enum member from its numeric value.

```javascript
enum StatusCode {
  Success = 200,
  NotFound = 404,
  Error = 500,
}

let status = StatusCode.Success;
console.log(StatusCode[status]); // 'Success'
```

## 4. Namespaces

Enums can be used to create namespaces for a set of related constants. This can help organize your code and make it more readable. While you can achieve something similar with types by using literal types within a namespace or module, enums provide a more concise and purpose-built way to do this.

```javascript
enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function checkStatus(status: HttpStatus) {
  // Function body
}

// Usage
checkStatus(HttpStatus.OK);
```

### How to do it with literal types

To organize a set of related constants similar to enums but using literal types, you can leverage a combination of literal types and a namespace or an object. While you won't get all the benefits of enums, such as runtime access and reverse mapping, this approach can still provide clarity and type safety. Here’s how you can achieve something similar to the namespace functionality of enums with literal types:

#### Using Object

You can define an object that contains your constants, and then use a type to restrict the values to the keys of that object.

```javascript
const HttpStatusCodes = {
  OK: 200,
  BadRequest: 400,
  Unauthorized: 401,
} as const;

type HttpStatus = typeof HttpStatusCodes[keyof typeof HttpStatusCodes];

function handleResponse(status: HttpStatus) {
  // Function body
}

// Usage
handleResponse(HttpStatusCodes.OK); // Works
handleResponse(123); // Error: Argument of type '123' is not assignable to parameter of type 'HttpStatus'.
```

#### Using a Namespace with Type Alias

Alternatively, for a more namespace-like organization without using an actual enum, you can use TypeScript's namespace feature combined with type aliases:

```javascript
namespace HttpStatus {
  export const OK = 200;
  export const BadRequest = 400;
  export const Unauthorized = 401;
}

type HttpStatus = typeof HttpStatus[keyof typeof HttpStatus];

function handleResponse(status: HttpStatus) {
  // Function body
}

// Usage
handleResponse(HttpStatus.OK); // Works
handleResponse(123); // Error: This type is not assignable to parameter of type 'HttpStatus'.
```