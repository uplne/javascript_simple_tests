# Type vs Interface

In TypeScript, both type aliases and interfaces are powerful features that allow you to define types for your data and structure. They share many similarities, but there are some key differences that might influence when and how you use each one.

## Key Similarities
1. **Extensibility:** Both can be extended, but the syntax and capabilities vary. Interfaces are extended using the extends keyword, and type aliases can be extended using intersections.
2. **Describing Objects:** Both can be used to describe the shape of objects, including properties and their types.

### Example of Extends with Interfaces

```
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    jobTitle: string;
    department: string;
}

const employee: Employee = {
    name: "John Doe",
    age: 30,
    jobTitle: "Software Developer",
    department: "Engineering"
};
```

### Example of Intersection Types

```
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type BusinessContact = BusinessPartner & Contact;

const newContact: BusinessContact = {
    name: "Alice Johnson",
    credit: 750,
    email: "alice.johnson@example.com",
    phone: "555-0123"
};
```