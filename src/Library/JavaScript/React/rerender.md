# Whar triggers re-render

## 1. State Changes
When the state of a component changes, React triggers a re-render. State changes are usually initiated by calling the setState() method in class components or the state update function returned by the useState hook in functional components. React then compares the new state with the previous state, and if there's a difference, it schedules a re-render.

## 2. Props Changes
React components also re-render when they receive new props, even if the state doesn't change. This is because React's reconciliation process detects changes in props passed to a component and updates the DOM accordingly to reflect these changes.

## 3. Context Changes
If a component is consuming React Context and the context value changes, the component will re-render. This allows global state or configuration to be updated across all consuming components without prop drilling.

## 4. Force Update
In class components, you can use the forceUpdate() method to force a component to re-render. This method bypasses the shouldComponentUpdate() check. It's generally recommended to avoid using forceUpdate() and to rely on state and props changes instead, as it can lead to inefficient rendering.

## 5. Hooks Triggering Re-renders
Some React hooks can cause a component to re-render when their dependencies change. For example:

**useEffect:** If the dependencies of a useEffect hook change, after executing the effect, React may schedule a re-render if state or props were updated as part of the effect execution.

**useReducer:** Similar to useState, updating the state through useReducer will trigger a re-render.

**Custom hooks:** Any custom hook that utilizes useState, useReducer, or other hooks that trigger re-renders can indirectly cause its consuming components to re-render when its internal state or dependencies change.

## Understanding Reconciliation
React uses a reconciliation process to determine which parts of the component tree need to be updated. This process involves diffing the old virtual DOM with the new virtual DOM generated after state, props, or context changes. Only the components and DOM nodes that have changed are re-rendered, making updates efficient.

## Optimizing Renders
React provides mechanisms to control and optimize the re-render process, such as shouldComponentUpdate, React.memo, and the useMemo and useCallback hooks. These tools help to prevent unnecessary re-renders by allowing you to specify conditions under which a component should or shouldn't update, thus enhancing performance.

## How React Determines Re-renders

When a parent component re-renders:

* React will by default re-render all its child components recursively down the component tree.
* The re-rendering of child components occurs because React needs to ensure that the DOM accurately reflects the current state and props of the entire component tree.

## Exceptions and Optimizations

Although the default behavior is to re-render child components when a parent does, there are ways to optimize and prevent unnecessary re-renders:

### React.memo (Functional Components):

Wrapping a functional component with React.memo creates a higher-order component that performs a shallow comparison of props. If the props are the same, React skips rendering the component and its children. It's similar in purpose to PureComponent but for functional components.

### useMemo and useCallback Hooks:

* The useMemo hook allows you to memoize expensive calculations so that they are not recalculated on every render unless their dependencies change.
* The useCallback hook lets you memoize callback functions, preventing them from being recreated on every render unless their dependencies change.
* Both hooks can help in reducing unnecessary renders by ensuring that values or functions that are passed as props to child components do not change with every render unless necessary.

## React.memo
React.memo is a higher-order component (HOC) that memoizes a functional component. It performs a shallow comparison of the current and new props and prevents re-rendering if they are the same. It's useful for optimizing the performance of functional components that rely heavily on props and might re-render too often even when their props haven't changed in a way that would lead to a different output.

```
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

**When to Use:**

* For components that render the same output given the same props.
* In performance-sensitive parts of the application where unnecessary re-renders are costly.

## useMemo
The useMemo hook is used within functional components to memoize expensive calculations. If the dependencies of useMemo haven't changed between renders, React skips the calculation and returns the memoized result. This avoids expensive calculations on every render when the inputs haven't changed.

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**When to Use:**

* For expensive calculations that don’t need to be recomputed on every render.
* When you need to memoize a value that is costly to compute.

## useCallback
The useCallback hook is similar to useMemo but is specifically designed for memoizing callback functions. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

```
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**When to Use:**

* For preventing unnecessary re-renders of child components that receive functions as props.
* When a callback is passed to components that are optimized with React.memo or should only re-render under certain conditions.

## Key Differences and Similarities
**Similarity:** Both useMemo and useCallback are hooks that rely on dependency arrays to determine when the memoized value or function should be recalculated or redefined. They help avoid unnecessary calculations or re-renders.

**Difference:** useMemo is used for memoizing values, while useCallback is specifically for memoizing functions. The choice between useMemo and useCallback depends on whether you're trying to memoize a computation result or a callback function.

## Best Practices

**Avoid Premature Optimization:** Use these tools when there's a proven performance bottleneck. React's rendering is already optimized, and unnecessary use of memoization can lead to complexity and memory overhead without significant benefits.

**Measure Performance:** Use profiling tools like the React Developer Tools to identify slow components and optimize selectively based on actual performance issues.

**Shallow Comparison in React.memo:** Since React.memo only does a shallow comparison, it's most effective with simple props or when you can ensure that object references don't change unnecessarily between renders.