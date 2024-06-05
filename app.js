/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

// Exercise completed for me!

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push('pizza', 'cheeseburger');
// They asked us to add pizza & hamburgers to the const 'foods' so I used the push method to do that.

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco');
// the unshift method places the 'taco' at the beginning of the 'foods' array.

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood = foods[1];
// we are settings favFood as a const, and when we equal it to 1, it will go to the 2nd in the list, which is pizza bc we put taco in the first spot.

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2, 0, 'tofu');
// I inserted tofu in between pizza and cheeseburger, to be honest with you i trial and errored the 2, 0 until i got tofu to where the instructions told us to put it.

console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

// Here we will need to use the splice action again
foods.splice(1, 1, 'sushi', 'cupcake');

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

// if we are assigning a new array I want to use const to assign yummy to foods sliced
const yummy = foods.slice(1, 3);
// I used foods because thats what we're adding to, and slice to insert 1 and 3, which are the second and 3rd options.

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

// use const to assign soyIdx variable
const soyIdx = foods.indexOf('tofu');
// I used the indexOf method to find the string tofu, which I defined, and it was in the foods array.
// when logging this should show '3' because tofu is the 4th one. 

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

// again assigning result to a variable requires const, and its gonna be named allFoods
const allFoods = foods.join(' -> ');
// join method to put -> between all of the elements 

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes('soup');
// the includes functions allows me to check if soup is in the hasSoup array.

console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = []; // this is initializing the empty array for the odd numbers

nums.forEach(num => {
   if (num % 2 !== 0) {
      odds.push(num);
   }
})

// forEach iterates through each number, if() function checks if number is off, push function pushes the number if it is odd to the array.

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90] // initalize with the numbers given to us
const fizz = []; // initialize fizz, this will be used for anything divisible by 3
const buzz = []; // initialize buzz, this will be used for anything divisible by 5
const fizzbuzz = []; // initialize fizzbuzz, will be used for a number that is evenly divisible by 3 and 5

nums.forEach (num => {
   if (num %3 === 0) {
      fizz.push(num);
   }
   if (num % 5 === 0) {
      buzz.push(num);
   }
   if (num %3 === 0 && num % 5 === 0) {
      fizzbuzz.push(num);
   }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length - 1]; // length property used to find last index and assign it

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const num = numArrays[2][1]; // 2 will get us the 3rd row and 1 will get us the second number, 66.

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

let total = 0;

numArrays.forEach(array => {
   array.forEach(num => {
      total += num; // ADD TO THE TOTAL OF NUMBERS 
   })
})

console.log('Exercise 15 result:\n', total);

