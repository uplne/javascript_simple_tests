# Time Complexity

The time complexity of an algorithm quantifies the amount of time an algorithm takes to run as a function of the length of the input. It's a way to express the upper bound of the runtime: how the execution time increases as the size of the input data increases. Time complexity is often expressed using Big O notation, which describes the worst-case scenario of an algorithm's growth rate.

## O(n) Time Complexity

When we say an algorithm has a time complexity of O(n), it means the execution time of the algorithm increases linearly with the increase in the size of the input data set. The "n" represents the size of the input. In simpler terms, if the input size doubles, the running time of the algorithm doubles as well. This linear relationship between the size of the input and the running time is what characterizes O(n) complexity.

## Understanding O(n) with an Example

Consider a function that sums all the elements of an array. The function has to visit each element of the array once to add it to the sum. If the array has 10 elements, the function performs 10 operations. If the array has 1,000 elements, it performs 1,000 operations. The number of operations (and therefore the time the function takes to execute) grows linearly with the size of the input array.

```
function sumArray(arr) {
  let sum = 0; // 1 operation
  for (let i = 0; i < arr.length; i++) { // n operations (for n elements in the array)
    sum += arr[i];
  }
  return sum; // 1 operation
}
```

In this example, the function's time complexity is O(n) because the time it takes to execute depends linearly on the number of elements in the input array arr.

## Characteristics of O(n) Algorithms

* **Scalability:** O(n) algorithms are generally considered efficient, especially for smaller inputs. However, their performance degrades linearly as the input size increases, which can become problematic with very large datasets.
* **Single Pass:** Many O(n) algorithms involve processing each input element exactly once, which is often seen in operations like searching, simple aggregations (sum, average), and linear traversals.