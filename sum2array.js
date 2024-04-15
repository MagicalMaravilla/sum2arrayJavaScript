//This wil be the sum of two arrays problem from the interview questions
// Given two arrays of integers, write a function that returns the sum of the two arrays.
// For example, given [1, 2, 3] and [4, 5, 6], the function should return [5, 7, 9].

// Plan
// 1. Create a function that takes in two arrays as arguments.
// 2. Create a new array to store the sum of the two arrays.
// 3. Loop through the arrays and add the elements at the same index.
// 4. Push the sum of the elements to the new array.
// 5. Return the new array.

function sum2array(arg1, arg2) //arg1 = [1, 2, 3], arg2 = [4, 5, 6]
{
    let sum = []; //new array to store the sum of the two arrays
    for(let i = 0; i < arg1.length; i++) //loop through the arrays
    {
        sum.push(arg1[i] + arg2[i]) //add the elements at the same index and push the sum to the new array
    }
    return sum; //return the new array
}

console.log(sum2array([1, 2, 3], [4,5,6])); //Output: [5, 7, 9]

// Test the function with additional arrays
console.log(sum2array([7, 8, 9], [10, 11, 12])); // Output: [17, 19, 21]
console.log(sum2array([-1, -2, -3], [4, 5, 6])); // Output: [3, 3, 3]
console.log(sum2array([0, 0, 0], [0, 0, 0])); // Output: [0, 0, 0]