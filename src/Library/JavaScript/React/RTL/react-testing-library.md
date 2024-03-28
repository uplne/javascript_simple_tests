# RTL

## Types of RTL Selectors (Queries)
RTL queries can be categorized based on their priority for use, as recommended by the Testing Library's query priority guide. Here is an overview of the primary selectors or queries available:

### getBy, queryBy, and findBy
* **getBy*:** Returns the matching node for a query, and throws an error if no elements match or if more than one match is found.
* **queryBy*:** Returns the matching node for a query, and returns null if no elements match. This is useful for asserting an element is not present.
* **findBy*:** Returns a Promise which resolves when an element is found which matches the given query. It is useful for dealing with asynchronous elements.

Each of these can be used with a variety of query strategies, such as:

### Role

Using getByRole, queryByRole, findByRole, etc., which is the most preferred query as it aligns with how users interact with your application accessibility-wise.

```
const button = screen.getByRole('button', { name: 'Submit' });
```