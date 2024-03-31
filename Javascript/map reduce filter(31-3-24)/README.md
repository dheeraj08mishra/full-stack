# Map Function

The `map()` function is a method available in JavaScript arrays that allows you to iterate over each element of an array and perform a transformation or computation on it. It creates a new array by applying the specified function to each element of the original array.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

 # Filter Function

The filter() function is another method available in JavaScript arrays that allows you to iterate over each element of an array and apply a test condition. It creates a new array containing only the elements that pass the test condition.


Example:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]



# Reduce Function
The reduce() function is a powerful method available in JavaScript arrays that allows you to reduce an array to a single value. It iterates over each element of the array, applying a reducer function that accumulates a result based on previous iterations.

Example:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
